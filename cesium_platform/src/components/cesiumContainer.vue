<template>
  <div class="common-layout">
    <el-container>
      <el-header height='30%'>
        <div>
          <router-link to="/" class="y" active-class="y-link--Active">地质灾害监测预警平台</router-link>
          <router-link to="/home" class="h" active-class="h-link--Active">首页</router-link>
          <router-link to="/data" class="d" active-class="d-link--Active">数据</router-link>
        </div>
      </el-header>
    </el-container>
    <el-container>
      <el-aside height='80%' width="20%">
        <div ref="Chart" id="Chart" :style="{ width: '100%', height: '50%' }"></div>
        <div ref="Chart1" id="Chart1" :style="{ width: '100%', height: '50%' }"></div>
      </el-aside>
      <el-main>
        <div id="cesiumContainer" style="height:100%"></div>
      </el-main>
      <el-aside height='80%' width="20%">
        <div ref="Chart2" id="Chart2" :style="{ width: '100%', height: '50%' }"></div>
        <div ref="Chart3" id="Chart3" :style="{ width: '100%', height: '50%' }"></div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue';


export default {
  name: "echartsBox",
  setup() {
    // 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
    let internalInstance = getCurrentInstance();
    let echarts = internalInstance.appContext.config.globalProperties.$echarts;

    onMounted(() => {
      const dom = document.getElementById('Chart');
      const Chart = echarts.init(dom); // 初始化echarts实例
      const option = {
        tooltip: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      };

      // 设置实例参数
      Chart.setOption(option);

      const dom1 = document.getElementById('Chart1');
      const Chart1 = echarts.init(dom1); // 初始化echarts实例
      const option1 = {
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }]
      };

      // 设置实例参数
      Chart1.setOption(option1);

      const dom2 = document.getElementById('Chart2');
      const Chart2 = echarts.init(dom2); // 初始化echarts实例
      const option2 = {
        // title: {
        //   text: '南丁格尔玫瑰图',
        //   subtext: '纯属虚构',
        //   left: 'center'
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: {
        //       show: true,
        //       type: ['pie', 'funnel']
        //     },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        series: [

          {
            name: '面积模式',
            type: 'pie',
            radius: [25, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          }
        ]
      };
      // 设置实例参数
      Chart2.setOption(option2);

      const dom3 = document.getElementById('Chart3');
      const Chart3 = echarts.init(dom3); // 初始化echarts实例
      const option3 = {
        // title: {
        //   text: '基础雷达图'
        // },
        tooltip: {},
        legend: {
          data: ['预算分配', '实际开销']
        },
        radar: {
          // shape: 'circle',
          axisName: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          },
          indicator: [
            { name: '销售', max: 6500 },
            { name: '管理', max: 16000 },
            { name: '信息技术', max: 30000 },
            { name: '客服', max: 38000 },
            { name: '研发', max: 52000 },
            { name: '市场', max: 25000 }
          ]
        },
        series: [{
          name: '预算 vs 开销',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配'
            },
            {
              value: [5000, 14000, 28000, 31000, 42000, 21000],
              name: '实际开销'
            }
          ]
        }]
      };
      // 设置实例参数
      Chart3.setOption(option3);

    });
    return {};
  },

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
    var token = this.token;
    var tdtUrl = this.tdtUrl;
    // var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];

    var viewer = new Cesium.Viewer("cesiumContainer", {
      animation: false, //是否创建动画小器件，左下角仪表
      baseLayerPicker: false, //是否显示图层选择器
      fullscreenButton: false, //是否显示全屏按钮
      geocoder: false, //是否显示geocoder小器件，右上角查询按钮
      homeButton: false, //是否显示Home按钮
      infoBox: true, //是否显示信息框
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

    //影像
    var imgMap = new Cesium.UrlTemplateImageryProvider({
      url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + token,
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],

      tilingScheme: new Cesium.WebMercatorTilingScheme(),
      maximumLevel: 18,
    });
    viewer.imageryLayers.addImageryProvider(imgMap);
    // window.viewer = viewer;


    //国界
    var iboMap = new Cesium.UrlTemplateImageryProvider({
      url: tdtUrl + 'DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=' + token,
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      tilingScheme: new Cesium.WebMercatorTilingScheme(),
      maximumLevel: 10
    });
    viewer.imageryLayers.addImageryProvider(iboMap);

    //地形
    // var terrainUrls = new Array();

    // for (var i = 0; i < subdomains.length; i++) {
    //   var url = tdtUrl.replace('{s}', subdomains[i]) + 'mapservice/swdx?tk=' + token;
    //   terrainUrls.push(url);
    // }

    // var provider = new Cesium.TerrainProvider({
    //   urls: terrainUrls
    // });
    // viewer.terrainProvider = provider;

    // viewer.scene.globe.depthTestAgainstTerrain = false;//标绘将位于地形的顶部

    viewer.scene.globe.enableLighting = true; //对大气和雾启用动态照明效果



    //添加行政区矢量数据
    var arcgisProvider = new Cesium.ArcGisMapServerImageryProvider({
      url: "http://192.168.80.169:6080/arcgis/rest/services/重庆行政区划黄色/MapServer",
    });
    viewer.imageryLayers.addImageryProvider(arcgisProvider);

    //添加重庆市范围矢量数据
    var arcgisProvider = new Cesium.ArcGisMapServerImageryProvider({
      url: "http://192.168.80.169:6080/arcgis/rest/services/重庆市/MapServer",
    });
    viewer.imageryLayers.addImageryProvider(arcgisProvider);


    //定位到重庆
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(107.8521, 28.0565, 449770),
      orientation: {
        heading: Cesium.Math.toRadians(350.077213),
        pitch: Cesium.Math.toRadians(-66.4631042),
        roll: Cesium.Math.toRadians(0)
      },
      complete: function callback() {
        // 定位完成之后的回调函数
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .cesiumContainer {
//   height: 100%;

// .cesiumContainer {
//   height: 850px;
//   // width:60%;
// }
.y {
  font-size: 1.6vw;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  letter-spacing: 3px;
  background-color: #6495ed;
}

// .u-link--Active{
//   background-color:#e0ffff;
// }
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
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
  height: 850px;
}

.el-main {
  background-color: 00E9EEF3;
  color: #333;
  text-align: center;
  height: 850px;
  padding: 0px;
}

// }
</style>