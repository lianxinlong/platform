<template>
    <div class="common-layout" type="flex">
        <el-container>
            <el-header class="home-header">
                <div class="title">
                    <img src='../assets/logo.png' alt="图标">
                    <span>地质灾害监测预警平台</span>
                </div>
                <div class="guide">
                <router-link class="dpbt" to="/" active-class="active">监测大屏</router-link>
                <router-link class="GZbt" to="/GZ" active-class="active">规资</router-link>
                <router-link class="YJbt" to="/YJ" active-class="active">应急</router-link>
                <router-link class="JTbt" to="/JT" active-class="active">交通</router-link>
                <router-link class="SLbt" to="/SL" active-class="active">水利</router-link>
                <router-link class="databt" to="/data" active-class="active">数据</router-link>
                </div>

            </el-header>
            <el-container>
                <el-aside>
                    <div class="menu">
                        <dizaiMenu />
                    </div>
                    <!-- <el-row class="tac">
                        <el-menu class="el-menu-vertical-demo" width="100%" opacity="1" default-active="2">

                            <el-sub-menu index="1">
                                <template #title>
                                    <span>重庆市地质灾害二级专业监测预警项目</span>
                                </template>

                                <el-sub-menu index="1-1">
                                    <template #title>城口区</template>
                                    <el-sub-menu index="1-1-1">
                                        <template #title>立新滑坡</template>
                                        <el-menu-item index="1-1-1-1">GNSS</el-menu-item>
                                        <el-menu-item index="1-1-1-2">降雨量</el-menu-item>
                                    </el-sub-menu>

                                    <el-menu-item index="1-1-2">坪坝寺滑坡</el-menu-item>
                                </el-sub-menu>

                                <el-sub-menu index="1-2">
                                    <template #title>开州区</template>
                                    <el-menu-item index="1-2-1">左家坪滑坡</el-menu-item>
                                    <el-menu-item index="1-2-2">天津滑坡</el-menu-item>
                                </el-sub-menu>
            
                            </el-sub-menu>

                            <el-menu-item index="2">
                                <span>三峡库区云阳县龙洞场镇地质安全监测预警项目</span>
                            </el-menu-item>

                            <el-menu-item index="3">
                                <span>三峡库区奉节县干沟子库岸专业监测预警项目</span>
                            </el-menu-item>

                            <el-menu-item index="4">
                                <span>2021年地质灾害专业监测预警</span>
                            </el-menu-item>

                        </el-menu>
                    </el-row> -->
                </el-aside>
                <el-main>
                    <div class="map">
                        <cesiumContainer />
                    </div>
                    <!-- <div id="cesiumContainer" style="height:100%;width:100%;position: relative;">
                    <div class="" id="one">
                            <Popup />
                        </div>
                    <div id="latlng_show" style="position:absolute;z-index: 999;color:#fff;bottom: 4vw;right: 1vw;">
                            <div style="float:left;font-size: 1vw;margin-right: 1vw;">经度：<span id="longitude_show"></span></div>
                            <div style="float:left;font-size: 1vw;margin-right: 1vw;">纬度：<span id="latitude_show"></span></div>
                            <div style="float:left;font-size: 1vw;">视角高：<span id="altitude_show"></span>km</div>
                        </div>
                    <div style="float:left;"> 海拔高：<span id="elevation_show"></span>m</div>
                        <div style="float:left;">俯仰角：<span id="pitch_show"></span></div>
                         <div style="float:left;">方向：<span id="heading_show"></span></div>
                    </div> -->
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  
<script>
// import { onMounted } from 'vue';
import cesiumContainer from './cesiumContainer.vue';
import dizaiMenu from './Menu.vue';
// import flyTo from './flyTo.vue';
// import addLayer from './addLayer.vue';
// import popUp from './popUp.vue';
// import Popup from "./Popup.vue";
// import $ from 'jquery';
export default {
    components: {
        cesiumContainer,
        dizaiMenu,
        // flyTo
    },
    data() {
        return {
        }
    },
    computed: {
        // key() {
        //     return this.$route.path + Math.random();
        // }

    },
    methods: {
        // flyTo(){

        // }
        // anotherMethod() {
        // console.log(this.viewer)}
    },
}
// export default {
//     name: "cesiumContainer",
//     // props: {
//     //   msg: String
//     // },
//     data() {
//         return {
//         }
//     },
//     methods: {

//     },


//     // mounted() {
//     //     this.init();
//     //     // this.loadPoints();
//     // },
//     setup() {
//         function init() {
//             const token = '65f3777bb7d614820e3286b4572abf6a';
//             const tdtUrl = 'https://t{s}.tianditu.gov.cn/';
//             // var subdomains = ['0', '1', '2', '3', '4', '5', '6', '7'];

//             const viewer = new Cesium.Viewer("cesiumContainer", {
//                 animation: false, //是否创建动画小器件，左下角仪表
//                 baseLayerPicker: false, //是否显示图层选择器
//                 fullscreenButton: false, //是否显示全屏按钮
//                 geocoder: false, //是否显示geocoder小器件，右上角查询按钮
//                 homeButton: false, //是否显示Home按钮
//                 infoBox: false, //是否显示信息框
//                 sceneModePicker: false, //是否显示3D/2D选择器
//                 selectionIndicator: false, //是否显示选取指示器组件
//                 timeline: false, //是否显示时间轴
//                 navigationHelpButton: false, //是否显示右上角的帮助按钮
//                 scene3DOnly: true, //如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
//                 clock: new Cesium.Clock(), //用于控制当前时间的时钟对象
//                 selectedImageryProviderViewModel: undefined, //当前图像图层的显示模型，仅baseLayerPicker设为true有意义
//                 imageryProviderViewModels: Cesium.createDefaultImageryProviderViewModels(), //可供BaseLayerPicker选择的图像图层ProviderViewModel数组
//                 selectedTerrainProviderViewModel: undefined, //当前地形图层的显示模型，仅baseLayerPicker设为true有意义
//                 terrainProviderViewModels: Cesium.createDefaultTerrainProviderViewModels(), //可供BaseLayerPicker选择的地形图层ProviderViewModel数组
//                 // imageryProvider: new Cesium.UrlTemplateImageryProvider(),//影像图层提供者，仅baseLayerPicker设为false有意义
//                 // terrainProvider: new Cesium.EllipsoidTerrainProvider(), //地形图层提供者，仅baseLayerPicker设为false有意义
//                 fullscreenElement: document.body, //全屏时渲染的HTML元素,
//                 useDefaultRenderLoop: true, //如果需要控制渲染循环，则设为true
//                 targetFrameRate: undefined, //使用默认render loop时的帧率
//                 showRenderLoopErrors: false, //如果设为true，将在一个HTML面板中显示错误信息
//                 automaticallyTrackDataSourceClocks: true, //自动追踪最近添加的数据源的时钟设置
//                 contextOptions: undefined, //传递给Scene对象的上下文参数（scene.options）
//                 sceneMode: Cesium.SceneMode.SCENE3D, //初始场景模式
//                 mapProjection: new Cesium.WebMercatorProjection(), //地图投影体系
//                 dataSources: new Cesium.DataSourceCollection()
//                 //需要进行可视化的数据源的集合
//             });
//             // Cesium.Camera.DEFAULT_VIEW_RECTANGLE =Cesium.Rectangle.fromDegrees(107.33, 29.85, 922000);
//             //设置home键回归的位置


//             // viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
//             //     e.cancel = true;
//             //     //你要飞的位置
//             //     viewer.camera.flyTo({
//             //         destination: Cesium.Cartesian3.fromDegrees(107.33, 29.85, 922000),
//             //         orientation: {
//             //             heading: Cesium.Math.toRadians(348.4202942851978),
//             //             pitch: Cesium.Math.toRadians(-89.74026687972041),
//             //             roll: Cesium.Math.toRadians(0)
//             //         },
//             //     });
//             // });
//             //设置home键回归的位置


//             viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏cesium的logo

//             // viewer._cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
//             //双击

//             viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
//             //默认的Cesium会加载一个bingMap底图，这个地图网络不太好，一般要先去掉这个默认的

//             //影像
//             const imgMap = new Cesium.UrlTemplateImageryProvider({
//                 url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + token,
//                 subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],

//                 tilingScheme: new Cesium.WebMercatorTilingScheme(),
//                 maximumLevel: 18,
//             });
//             viewer.imageryLayers.addImageryProvider(imgMap);
//             // window.viewer = viewer;

//             //国界
//             const iboMap = new Cesium.UrlTemplateImageryProvider({
//                 url: tdtUrl + 'DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=' + token,
//                 subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
//                 tilingScheme: new Cesium.WebMercatorTilingScheme(),
//                 maximumLevel: 10
//             });
//             viewer.imageryLayers.addImageryProvider(iboMap);

//             //地形
//             // var terrainUrls = new Array();

//             // for (var i = 0; i < subdomains.length; i++) {
//             //   var url = tdtUrl.replace('{s}', subdomains[i]) + 'mapservice/swdx?tk=' + token;
//             //   terrainUrls.push(url);
//             // }

//             // var provider = new Cesium.TerrainProvider({
//             //   urls: terrainUrls
//             // });
//             // viewer.terrainProvider = provider;

//             // viewer.scene.globe.depthTestAgainstTerrain = false;//标绘将位于地形的顶部

//             viewer.scene.globe.enableLighting = true; //对大气和雾启用动态照明效果

//             //添加行政区矢量数据
//             const xingzhengquProvider = new Cesium.ArcGisMapServerImageryProvider({
//                 url: "http://192.168.80.169:6080/arcgis/rest/services/重庆行政区划黄色/MapServer",
//             });
//             viewer.imageryLayers.addImageryProvider(xingzhengquProvider);

//             // 地灾点矢量
//             // var dizaidianProvider = new Cesium.ArcGisMapServerImageryProvider({
//             //     url: "http://192.168.80.169:6080/arcgis/rest/services/地研院承担监测项目位置/MapServer",
//             // });
//             // viewer.imageryLayers.addImageryProvider(dizaidianProvider);

//             //定位到重庆
//             viewer.camera.flyTo({
//                 destination: Cesium.Cartesian3.fromDegrees(107.33, 29.85, 922000),
//                 orientation: {
//                     heading: Cesium.Math.toRadians(348.4202942851978),
//                     pitch: Cesium.Math.toRadians(-89.74026687972041),
//                     roll: Cesium.Math.toRadians(0)
//                 },
//                 complete: function callback() {
//                     // 定位完成之后的回调函数
//                 }
//             });

//             // 跟随鼠标获取经纬度和海拔
//             const longitude_show = document.getElementById('longitude_show');
//             const latitude_show = document.getElementById('latitude_show');
//             const altitude_show = document.getElementById('altitude_show');
//             // var elevation_show = document.getElementById('elevation_show');
//             // var pitch_show = document.getElementById('pitch_show');
//             // var heading_show = document.getElementById('heading_show');

//             const canvas = viewer.scene.canvas;
//             //具体事件的实现
//             const ellipsoid = viewer.scene.globe.ellipsoid;
//             const handlerMove = new Cesium.ScreenSpaceEventHandler(canvas);
//             handlerMove.setInputAction((movement) => {
//                 //捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点
//                 var cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
//                 if (cartesian) {
//                     //将笛卡尔三维坐标转为地图坐标（弧度）
//                     var cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
//                     //将地图坐标（弧度）转为十进制的度数
//                     var lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
//                     var log_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
//                     var alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
//                     // var elec_String = Number(viewer.scene.globe.getHeight(cartographic)).toFixed(2);
//                     // var pitch_String = (viewer.camera.pitch).toFixed(2);
//                     // var heading_String = (viewer.camera.heading).toFixed(2);

//                     longitude_show.innerHTML = log_String;
//                     latitude_show.innerHTML = lat_String;
//                     altitude_show.innerHTML = alti_String;//视角高度 km
//                     // elevation_show.innerHTML = elec_String;//海拔
//                     // pitch_show.innerHTML = pitch_String;
//                     // heading_show.innerHTML = heading_String;
//                 }
//             }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


//             //单击事件
//             // const handlerclick = new Cesium.ScreenSpaceEventHandler(canvas);
//             // handlerclick.setInputAction((click) => {
//             //     console.log("左键单击事件：", click.position);
//             //     const cartesian = viewer.camera.pickEllipsoid(click.position, ellipsoid);
//             //     const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
//             //     const lat = Cesium.Math.toDegrees(cartographic.latitude).toFixed(5);
//             //     const lon = Cesium.Math.toDegrees(cartographic.longitude).toFixed(5);
//             //     console.log(lat, lon)


//             //     const pick = viewer.scene.pick(click.position);
//             //     console.log(pick)
//             //     // 如果pick不是undefined，那么就是点到点位了
//             //     if (pick && pick.id) {
//             //         // 定位到地图中心
//             //         // this.locationToCenter(lon, lat);
//             //         console.log(pick.id);
//             //         const data = {
//             //             layerId: "layer1", // 英文，且唯一,内部entity会用得到
//             //             lon: lon,
//             //             lat: lat,
//             //             element: "#one", // 弹框的唯一id
//             //             boxHeightMax: 0, // 中间立方体的最大高度
//             //         };

//             //         this.$("#one").css("z-index", 9990);
//             //         this.showDynamicLayer(this.viewer, data, () => { // 回调函数 改变弹窗的内容;
//             //             this.popData.title = pick.id.name;
//             //             this.popData.pointId = pick.id.id;
//             //         });
//             //         // 调用弹框的默认方法
//             //         this.$refs.popUp.defalutSetting();
//             //     } else {
//             //         // 移除弹框
//             //         if (document.querySelector("#one")) {
//             //             this.removeDynamicLayer(this.viewer, { element: "#one" });
//             //             $("#one").css("z-index", -1);
//             //         }
//             //     }
//             // }, Cesium.ScreenSpaceEventType.LEFT_CLICK);


//             // loadPoints() {
//             //     this.pointInfo = [
//             //         {
//             //             id: "392f7fbb-ae25-4eef-ac43-58fd91148d1f",
//             //             latitude: "31.87532",
//             //             longitude: "120.55538",
//             //             psName: "有限公司1",
//             //         },
//             //         {
//             //             id: "0278a88c-b4f4-4d64-9ccb-65831b3fb19d",
//             //             latitude: "31.991057",
//             //             longitude: "120.700713",
//             //             psName: "有限公司2",
//             //         },
//             //         {
//             //             id: "248f6853-2ced-4aa6-b679-ea6422a5f3ac",
//             //             latitude: "31.94181",
//             //             longitude: "120.51517",
//             //             psName: "有限公司3",
//             //         },
//             //         {
//             //             id: "F8DADA95-A438-49E1-B263-63AE3BD7DAC4",
//             //             latitude: "31.97416",
//             //             longitude: "120.56132",
//             //             psName: "有限公司4",
//             //         },
//             //         {
//             //             id: "9402a911-78c5-466a-9162-d5b04d0e48f0",
//             //             latitude: "31.91604",
//             //             longitude: "120.57771",
//             //             psName: "有限公司5",
//             //         },
//             //         {
//             //             id: "EB392DD3-6998-437F-8DCB-F805AD4DB340",
//             //             latitude: "31.88727",
//             //             longitude: "120.48887",
//             //             psName: "有限公司6",
//             //         },
//             //     ];
//             //     this.addMarker();
//             // },

//             // addMarker() {
//             //     const _textColor = "rgb(11, 255, 244)";
//             //     const Cesium = this.cesium;
//             //     // 清除上一次加载的点位
//             //     this.viewer.entities.removeAll();
//             //     // foreach循环加载点位
//             //     this.pointInfo.forEach((pointObj) => {
//             //         this.viewer.entities.add({
//             //             name: pointObj.psName,
//             //             code: pointObj.id,
//             //             id: pointObj.id,
//             //             position: Cesium.Cartesian3.fromDegrees(
//             //                 pointObj.longitude * 1,
//             //                 pointObj.latitude * 1
//             //             ),
//             //             // 点
//             //             // point: {
//             //             //   pixelSize: 5,
//             //             //   color: Cesium.Color.RED,
//             //             //   outlineColor: Cesium.Color.WHITE,
//             //             //   outlineWidth: 2,
//             //             // },
//             //             // 文字标签
//             //             label: {
//             //                 // show: false,
//             //                 text: pointObj.psName,
//             //                 font: "12px monospace",
//             //                 style: Cesium.LabelStyle.FILL_AND_OUTLINE,
//             //                 fillColor: Cesium.Color.LIME,
//             //                 outlineWidth: 4,
//             //                 verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
//             //                 pixelOffset: new Cesium.Cartesian2(0, -20), // 偏移量
//             //             },
//             //             // 图标
//             //             billboard: {
//             //                 // image: require("@/assets/imgs/point.png"),
//             //                 width: 18,
//             //                 height: 24,
//             //             },
//             //         });
//             //     });
//             // },
//             // 创建一个动态实体弹窗
//             // showDynamicLayer(viewer, data, callback) {
//             //     /* 弹窗的dom操作--默认必须*/
//             //     this.$(data.element).css({ opacity: 0 }); // 使用hide()或者display是不行的 因为cesium是用pre定时重绘的div导致 left top display 会一直重绘
//             //     this.$(".dynamic-layer .line").css({ width: 0 });
//             //     this.$(data.element).find(".main").hide(0);
//             //     /* 弹窗的dom操作--针对性操作*/
//             //     callback();

//             //     // 添加div弹窗
//             //     const lon = data.lon * 1, lat = data.lat * 1;
//             //     // data.boxHeightMax为undef也没事
//             //     const divPosition = this.cesium.Cartesian3.fromDegrees(lon, lat, data.boxHeightMax);
//             //     this.$("#one").css({ opacity: 1 });
//             //     this.$("#one").find(".line").animate({
//             //         width: 50 // 线的宽度
//             //     }, 500, () => {
//             //         this.$("#one").find(".main").fadeIn(500);
//             //     });
//             //     // 当为true的时候，表示当element在地球背面会自动隐藏。默认为false，置为false，不会这样。但至少减轻判断计算压力
//             //     this.creatHtmlElement(viewer, data.element, divPosition, [10, -0], true);
//             // },

//             // // 创建一个 htmlElement元素 并且，其在earth背后会自动隐藏
//             // creatHtmlElement(viewer, element, position, arr, flog) {
//             //     const Cesium = this.cesium;
//             //     const ele = document.querySelector(element);
//             //     const scratch = new Cesium.Cartesian2(); // cesium二维笛卡尔 笛卡尔二维坐标系就是我们熟知的而二维坐标系；三维也如此
//             //     const scene = viewer.scene, camera = viewer.camera;
//             //     scene.preRender.addEventListener(() => {
//             //         var canvasPosition = scene.cartesianToCanvasCoordinates(position, scratch); // cartesianToCanvasCoordinates 笛卡尔坐标（3维度）到画布坐标
//             //         if (Cesium.defined(canvasPosition)) {
//             //             ele.style.left = canvasPosition.x + arr[0] + "px";
//             //             ele.style.top = canvasPosition.y + arr[1] + "px";
//             //             /* 此处进行判断**/// var px_position = Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, cartesian)
//             //             if (flog && flog == true) {
//             //                 var e = position, i = camera.position, n = scene.globe.ellipsoid.cartesianToCartographic(i).height
//             //                 if (!(n += 1 * scene.globe.ellipsoid.maximumRadius, Cesium.Cartesian3.distance(i, e) > n)) {
//             //                     // $(element).show()
//             //                     ele.style.display = "block";
//             //                 } else {
//             //                     ele.style.display = "none";
//             //                     // $(element).hide()
//             //                 }
//             //             }
//             //         }
//             //     });
//             // },

//             // // 移除动态弹窗 为了方便 这里的移除 是真的移除，因此 到时是需要重建弹窗的doom的
//             // removeDynamicLayer(viewer, data) {
//             //     document.querySelector(data.element).style.opacity = 0;
//             // }

//         }
//         onMounted(() => {
//             init()
//         })
//         return {};
//     }
// }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .cesiumContainer {
//   height: 100%;

// .cesiumContainer {
//     height: 80%;
//     // width:60%;
// }
* {
    margin: 0;
    padding: 0;
}

.common-layout {
    height: 100%;
    width: 100%;
}

.el-container {
    padding: 0;
    margin: 0;
    height: 96%;
}

.el-header,
.el-footer {

    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    height: 8%;
    display: inline-flex;
    align-items: center;
    padding: 0vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) // line-height: 60px;
}

.el-aside {
    // background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
    width: 15%;
    // line-height: 800px;
}



.el-main {
    background-color: 00E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
    width: 85%;
    padding: 0;
}

.el-main .map {
    height: 100%;
    width: 100%;
}

// header.el-header.header {
// background: url("../assets/logo.png") no-repeat center left;
// background-size: 25% 80%;
// background-color: deepskyblue;
// background-color: burlywood;
// }
.home-header .title {

    color: white;
    font-size: 1.5vw;
    font-weight: bolder;
    // margin: auto;
    // position: absolute;
    // transform: translate(-50%);
    display: inline-flex;
    align-items: center;
}

.home-header .title img {
    margin-left: 1vw;
    margin-right: 1vw;
    width: 4vw;
    height: 3vw;
}

// .guide{
//     justify-content: flex-end;
// }

.dpbt,
.GZbt,
.YJbt,
.JTbt,
.SLbt,
.databt {
    padding: 0.5vw;
    color: white;
    font-size: 1.2vw;
    text-align: center;
    text-decoration: none;
    
    // justify-content: flex-end;
}

.dpbt {
    // left: 75%;
    // position: absolute;
    padding-left: 50vw;
    // justify-content: flex-end;

}


.GZbt {
    // left: 81%;
    // position: absolute;
}


.YJbt {
    // left: 81%;
    // position: absolute;
}
.JTbt {
    // left: 81%;
    // position: absolute;
}

.SLbt {
    color: black;
    // left: 85%;
    // position: absolute;
}

// }
</style>