<template>
    <div class="common-layout">
        <el-container>
            <el-header background-image="http://www.cqdky.com/images/cqdky/logo.png">
                <router-link to="/">主页</router-link>
                <router-link to="/home">首页</router-link>
                <router-link to="/data">数据</router-link>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <div id="cesiumContainer">
                        <div id="latlng_show">
                            <div style="float:left;">经度：<span id="longitude_show"></span></div>
                            <div style="float:left;">纬度：<span id="latitude_show"></span></div>
                            <div style="float:left;">视角高：<span id="altitude_show"></span>km</div>
                        </div>
                        <!-- <div style="float:left;"> 海拔高：<span id="elevation_show"></span>m</div>
                        <div style="float:left;">俯仰角：<span id="pitch_show"></span></div>
                         <div style="float:left;">方向：<span id="heading_show"></span></div> -->
                    </div>
                </el-main>
            </el-container>
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
        var token = this.token;
        var tdtUrl = this.tdtUrl;
        // var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];

        var viewer = new Cesium.Viewer("cesiumContainer", {
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
            url: "http://192.168.80.169:6080/arcgis/rest/services/重庆行政区划/MapServer",
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


        // 跟随鼠标获取经纬度和海拔
        var longitude_show = document.getElementById('longitude_show');
        var latitude_show = document.getElementById('latitude_show');
        var altitude_show = document.getElementById('altitude_show');
        // var elevation_show = document.getElementById('elevation_show');
        // var pitch_show = document.getElementById('pitch_show');
        // var heading_show = document.getElementById('heading_show');

        var canvas = viewer.scene.canvas;
        //具体事件的实现
        var ellipsoid = viewer.scene.globe.ellipsoid;
        var handler = new Cesium.ScreenSpaceEventHandler(canvas);
        handler.setInputAction((movement) => {
            //捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点
            var cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
            if (cartesian) {
                //将笛卡尔三维坐标转为地图坐标（弧度）
                var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
                //将地图坐标（弧度）转为十进制的度数
                var lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
                var log_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
                var alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
                // var elec_String = Number(viewer.scene.globe.getHeight(cartographic)).toFixed(2);
                // var pitch_String = (viewer.camera.pitch).toFixed(2);
                // var heading_String = (viewer.camera.heading).toFixed(2);

                longitude_show.innerHTML = log_String;
                latitude_show.innerHTML = lat_String;
                altitude_show.innerHTML = alti_String;//视角高度 km
                // elevation_show.innerHTML = elec_String;//海拔
                // pitch_show.innerHTML = pitch_String;
                // heading_show.innerHTML = heading_String;
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .cesiumContainer {
//   height: 100%;

.cesiumContainer {
    height: 80%;
    // width:60%;
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
    color: #333;
    text-align: center;
    line-height: 800px;
}

.el-main {
    background-color: 00E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 800px;
    padding: 0px;
}

// }
</style>