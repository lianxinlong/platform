<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <router-link to="/">主页</router-link>
        <router-link to="/home">首页</router-link>
        <router-link to="/data">数据</router-link>
      </el-header>
      <el-main>
        <div id="cesiumContainer">
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "cesiumContainer",
  // props: {
  //   msg: String
  // },
  data() {
    return {
      defaultAccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZTA3NzY2ZC1lMDdmLTRjODAtYmI2My05NTI3MjNkYjNjZmEiLCJpZCI6MzczOTAsImlhdCI6MTYwNDk5Mzg5OX0.BYBiqacYVkJz-nXU1qopx7PKpDTfLe4490f-L1HuybQ',
      token: '65f3777bb7d614820e3286b4572abf6a',
      tdtUrl: 'https://t{s}.tianditu.gov.cn/'
    }
  },
  mounted() {
    Cesium.Ion.defaultAccessToken = this.defaultAccessToken;
    const token = this.token;
    const tdtUrl = this.tdtUrl;
    // const subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];

    const viewer = new Cesium.Viewer("cesiumContainer", {
      animation: false, //是否创建动画小器件，左下角仪表
      baseLayerPicker: false, //是否显示图层选择器
      fullscreenButton: false, //是否显示全屏按钮
      geocoder: false, //是否显示geocoder小器件，右上角查询按钮
      homeButton: false, //是否显示Home按钮
      infoBox: false, //是否显示信息框
      sceneModePicker: false, //是否显示3D/2D选择器
      selectionIndicator: false, //是否显示选取指示器组件
      timeline: false, //是否显示时间轴
      navigationHelpButton: false, //是否显示右上角的帮助按钮
      scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
      clock: new Cesium.Clock(), //用于控制当前时间的时钟对象
      selectedImageryProviderViewModel: undefined, //当前图像图层的显示模型，仅baseLayerPicker设为true有意义
      imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(), //可供BaseLayerPicker选择的图像图层ProviderViewModel数组
      selectedTerrainProviderViewModel: undefined, //当前地形图层的显示模型，仅baseLayerPicker设为true有意义
      terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(), //可供BaseLayerPicker选择的地形图层ProviderViewModel数组
      // imageryProvider: new Cesium.UrlTemplateImageryProvider(),//影像图层提供者，仅baseLayerPicker设为false有意义
      // terrainProvider: new Cesium.EllipsoidTerrainProvider(), //地形图层提供者，仅baseLayerPicker设为false有意义
      fullscreenElement: document.body, //全屏时渲染的HTML元素,
      useDefaultRenderLoop: true, //如果需要控制渲染循环，则设为true
      targetFrameRate: undefined, //使用默认render loop时的帧率
      showRenderLoopErrors: false, //如果设为true，将在一个HTML面板中显示错误信息
      automaticallyTrackDataSourceClocks: true, //自动追踪最近添加的数据源的时钟设置
      contextOptions: undefined, //传递给Scene对象的上下文参数（scene.options）
      sceneMode: Cesium.SceneMode.SCENE3D, //初始场景模式
      mapProjection: new Cesium.WebMercatorProjection(), //地图投影体系
      dataSources: new Cesium.DataSourceCollection()
      //需要进行可视化的数据源的集合
    });
    viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏cesium的logo

    viewer._cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    viewer.imageryLayers.remove(viewer.imageryLayers.get(0));//默认的Cesium会加载一个bingMap底图，这个地图网络不太好，一般要先去掉这个默认的
    
    const imgMap = new Cesium.UrlTemplateImageryProvider({
      url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      tilingScheme: new Cesium.WebMercatorTilingScheme(),
    });
    viewer.imageryLayers.addImageryProvider(imgMap);
    //影像
    // const imgMap = new Cesium.UrlTemplateImageryProvider({
    //   url: tdtUrl + 'DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + token,
    //   subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],

    //   tilingScheme: new Cesium.WebMercatorTilingScheme(),
    //   maximumLevel: 18,
    // });
    // viewer.imageryLayers.addImageryProvider(imgMap);
    // viewer.imageryLayers.addImageryProvider(imgMap).hue=3;
    // viewer.imageryLayers.addImageryProvider(imgMap).contrast=-1.2;
    // window.viewer = viewer;

    //国界
    const iboMap = new Cesium.UrlTemplateImageryProvider({
      url: tdtUrl + 'DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=' + token,
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      tilingScheme: new Cesium.WebMercatorTilingScheme(),
      maximumLevel: 10
    });
    viewer.imageryLayers.addImageryProvider(iboMap);

    //地形
    // const terrainUrls = new Array();
    // const subdomains= ['0', '1', '2', '3', '4', '5', '6', '7'];
    // for (const i = 0; i < subdomains.length; i++) {
    //   const url = tdtUrl.replace('{s}', subdomains[i]) + 'DataServer?T=elv_c&tk=' + token;
    //   terrainUrls.push(url);
    // }

    // const provider = new Cesium.CesiumTerrainProvider({
    //   urls: terrainUrls
    // });

    // viewer.terrainProvider = provider;

    // viewer.scene.globe.depthTestAgainstTerrain = false;//标绘将位于地形的顶部
    // viewer.scene.skyBox.show = false //关闭天空盒，否则会显示天空颜色

    // viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0);    //背景透明


    // viewer.scene.skyAtmosphere.show = false  //关闭大气

    // viewer.scene.fxaa = true; //抗锯齿
    // viewer.scene.postProcessStages.fxaa.enabled = true;

    // viewer.scene.moon.show = false
    // viewer.scene.sun.show = false    //清除月亮太阳

    // viewer.scene.globe.enableLighting = false; //对大气和雾启用动态照明效果

    //添加行政区矢量数据
    const arcgisProvider = new Cesium.ArcGisMapServerImageryProvider({
      url: "http://localhost:6080/arcgis/rest/services/重庆行政区划/MapServer",
    });
    viewer.imageryLayers.addImageryProvider(arcgisProvider);



    //定位到重庆
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(107.33, 29.85, 600000),
      orientation: {
        heading: Cesium.Math.toRadians(348.4202942851978),
        pitch: Cesium.Math.toRadians(-89.74026687972041),
        roll: Cesium.Math.toRadians(0)
      },
      complete: function callback() {
        // 定位完成之后的回调函数
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .cesiumContainer {
//   height: 100%;

#cesiumContainer {
  height: 80%;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 800px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  // line-height: 800px;
  padding: 0px;
}

// }
</style>