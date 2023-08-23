<template>
    <div id="cesiumContainer" style="height:100%;width:100%;position: relative;">
        <div id="latlng_show" style="position:absolute;z-index: 999;color:#fff;bottom: 1vw;right: 1vw;">
            <div style="float:left;font-size: 1vw;margin-right: 1vw;">经度：<span id="longitude_show"></span></div>
            <div style="float:left;font-size: 1vw;margin-right: 1vw;">纬度：<span id="latitude_show"></span></div>
            <div style="float:left;font-size: 1vw;margin-right: 1vw;">视角高：<span id="altitude_show"></span>km</div>
        </div>
        <!-- <div style="float:left;"> 海拔高：<span id="elevation_show"></span>m</div>
                        <div style="float:left;">俯仰角：<span id="pitch_show"></span></div>
                         <div style="float:left;">方向：<span id="heading_show"></span></div> -->
    </div>
    <div class="dynamic-layer" id="one">
        <div class="line"></div>
        <div class="pop">
            <popUp :pointInfo="popData" ref="popUpRef" />
        </div>
    </div>
</template>

<script>
// import { ref, onMounted,onRenderTracked,onRenderTriggered } from 'vue';
import { ref, onMounted } from 'vue';
import popUp from './popUp.vue';
import $ from 'jquery';
// import chongqingshi from '../assets/chongqingshi.json'
import dizaidianhuizong from '../assets/地灾点汇总.json'
import heshabab3dm from '../assets/heshabab3dm/tileset.json'

export default {
    // name: "cesiumContainer",
    components: {
        popUp
    },
    data() {
        return {
            // popData: {
            //     pointId: '--',
            //     title: '--'
            // }
        }
    },

    setup() {
        // onRenderTracked((event)=>{
        //     console.log(event)

        // })
        // onRenderTriggered((event)=>{
        //     console.log(event)
  
        // })

        const popUpRef = ref(null);
        const init = () => {
            const token = '65f3777bb7d614820e3286b4572abf6a';
            const tdtUrl = 'https://t{s}.tianditu.gov.cn/';
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
            // Cesium.Camera.DEFAULT_VIEW_RECTANGLE =Cesium.Rectangle.fromDegrees(107.33, 29.85, 922000);
            //设置home键回归的位置


            // viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
            //     e.cancel = true;
            //     //你要飞的位置	
            //     viewer.camera.flyTo({
            //         destination: Cesium.Cartesian3.fromDegrees(107.33, 29.85, 922000),
            //         orientation: {
            //             heading: Cesium.Math.toRadians(348.4202942851978),
            //             pitch: Cesium.Math.toRadians(-89.74026687972041),
            //             roll: Cesium.Math.toRadians(0)
            //         },
            //     });
            // });
            //设置home键回归的位置


            viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏cesium的logo

            // viewer._cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
            //双击

            viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
            //默认的Cesium会加载一个bingMap底图，这个地图网络不太好，一般要先去掉这个默认的


            //定位到重庆
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(107.33, 29.85, 922000),
                orientation: {
                    heading: Cesium.Math.toRadians(348.4202942851978),
                    pitch: Cesium.Math.toRadians(-89.74026687972041),
                    roll: Cesium.Math.toRadians(0)
                },
                complete: function callback() {
                    // 定位完成之后的回调函数
                }
            });

            //影像
            const imgMap = new Cesium.UrlTemplateImageryProvider({
                url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + token,
                subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],

                tilingScheme: new Cesium.WebMercatorTilingScheme(),
                maximumLevel: 18,
            });
            viewer.imageryLayers.addImageryProvider(imgMap);
            // window.viewer = viewer;

            //国界
            const iboMap = new Cesium.UrlTemplateImageryProvider({
                url: tdtUrl + 'DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=' + token,
                subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
                tilingScheme: new Cesium.WebMercatorTilingScheme(),
                maximumLevel: 10
            });
            viewer.imageryLayers.addImageryProvider(iboMap);
            //高德地图
            // viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
            //     url: 'http://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
            //     tilingScheme: new Cesium.WebMercatorTilingScheme()
            // })
            // );
            //地形
            viewer.terrainProvider = Cesium.createWorldTerrain();
            // const terrainUrls = [];

            // for (let i = 0; i < 8; i++) {
            //   const url = tdtUrl.replace('{s}', i) + 'mapservice/swdx?tk=' + token;
            //   terrainUrls.push(url);
            // }

            // const terrainProvider = new Cesium.TerrainProvider({
            //   urls: terrainUrls
            // });
            // viewer.terrainProvider = terrainProvider;


            // viewer.scene.globe.depthTestAgainstTerrain = false;//标绘将位于地形的顶部

            viewer.scene.globe.enableLighting = true; //对大气和雾启用动态照明效果

            //添加行政区矢量数据
            const xingzhengquProvider = new Cesium.ArcGisMapServerImageryProvider({
                url: "http://192.168.80.169:6080/arcgis/rest/services/重庆行政区划黄色/MapServer",

            });
            viewer.imageryLayers.addImageryProvider(xingzhengquProvider);




            // 地灾点矢量
            // const dizaidianProvider = new Cesium.ArcGisMapServerImageryProvider({
            //     url: "http://192.168.80.169:6080/arcgis/rest/services/地研院承担监测项目位置/MapServer",
            // });
            // viewer.imageryLayers.addImageryProvider(dizaidianProvider);


            // 跟随鼠标获取经纬度和海拔
            const longitude_show = document.getElementById('longitude_show');
            const latitude_show = document.getElementById('latitude_show');
            const altitude_show = document.getElementById('altitude_show');
            // const elevation_show = document.getElementById('elevation_show');
            // const pitch_show = document.getElementById('pitch_show');
            // const heading_show = document.getElementById('heading_show');

            const canvas = viewer.scene.canvas;
            const ellipsoid = viewer.scene.globe.ellipsoid;
            const handlerMove = new Cesium.ScreenSpaceEventHandler(canvas);
            handlerMove.setInputAction((movement) => {
                //捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点
                const cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
                if (cartesian) {
                    //将笛卡尔三维坐标转为地图坐标（弧度）
                    const cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
                    //将地图坐标（弧度）转为十进制的度数
                    const lat_String = Cesium.Math.toDegrees(cartographic.latitude).toFixed(4);
                    const lon_String = Cesium.Math.toDegrees(cartographic.longitude).toFixed(4);
                    const alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
                    // const elec_String = Number(viewer.scene.globe.getHeight(cartographic)).toFixed(2);
                    // const pitch_String = (viewer.camera.pitch).toFixed(2);
                    // const heading_String = (viewer.camera.heading).toFixed(2);

                    longitude_show.innerHTML = lon_String;
                    latitude_show.innerHTML = lat_String;
                    altitude_show.innerHTML = alti_String;//视角高度 km
                    // elevation_show.innerHTML = elec_String;//海拔
                    // pitch_show.innerHTML = pitch_String;
                    // heading_show.innerHTML = heading_String;
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

            //添加所有地灾点数据
            // const dizaidianProvider = new Cesium.ArcGisMapServerImageryProvider({
            //     url: "http://192.168.80.169:6080/arcgis/rest/services/地研院承担监测项目位置/MapServer",
            // });
            // viewer.imageryLayers.addImageryProvider(dizaidianProvider);

            

            const tileset = new Cesium.Cesium3DTileset({
                // url:'@/data/shahebaob3dm/tileset.json',
                url:heshabab3dm,
                maximumScreenSpaceError: 2, //最大的屏幕空间误差
                maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
            })
            //添加到球体上
            tileset.readyPromise.then((tileset) => {
                viewer.scene.primitives.add(tileset);
                // 将3d tiles离地高度抬升30米
                const cartographic = Cesium.Cartographic.fromCartesian(
                    tileset.boundingSphere.center
                );

                const surface = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude,
                    cartographic.latitude,
                    0.0
                );

                const offset = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude,
                    cartographic.latitude,
                    30.0
                );

                const translation = Cesium.Cartesian3.subtract(
                    offset,
                    surface,
                    new Cesium.Cartesian3()
                );

                tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
            })




            Cesium.GeoJsonDataSource.load(dizaidianhuizong, {}).then(function (dataSource) {
                viewer.dataSources.add(dataSource);

                const entities = dataSource.entities.values;

                for (let i = 0; i < entities.length; i++) {
                    let entity = entities[i];
                    entity.billboard = undefined;
                    entity.point = new Cesium.PointGraphics({
                        color: Cesium.Color.YELLOW,
                        pixelSize: 10,
                        heightReference:Cesium.HeightReference.clampToGround,
                        // clampToGround:true
                    });
                }
            });




            // 弹窗
            const handler = new Cesium.ScreenSpaceEventHandler(canvas);
            handler.setInputAction((click) => {
                // console.log("左键点击事件",click.position);
                //捕获椭球体，将笛卡尔二维平面坐标转为椭球体的笛卡尔三维坐标，返回球体表面的点
                const cartesian = viewer.camera.pickEllipsoid(click.position, ellipsoid);
                //将笛卡尔三维坐标转为地图坐标（弧度）
                const cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
                //将地图坐标（弧度）转为十进制的度数
                const lat = Cesium.Math.toDegrees(cartographic.latitude);
                const lon = Cesium.Math.toDegrees(cartographic.longitude);
                // const alti_String = (viewer.camera.positionCartographic.height / 1000).toFixed(2);
                // console.log(lat,lon)
                // 获取地图上的点位实体(entity)坐标
                const pick = viewer.scene.pick(click.position);
                // console.log(pick)

                // 如果pick不是undefined，那么就是点到点位了
                if (pick && pick.id) {
                    // 定位到地图中心
                    // this.locationToCenter(lon, lat);
                    // console.log(pick.id);
                    const data = {
                        layerId: "layer1", // 英文，且唯一,内部entity会用得到
                        lon: lon,
                        lat: lat,
                        element: "#one", // 弹框的唯一id
                        boxHeightMax: 0, // 中间立方体的最大高度
                    };
                    // console.log(data)

                    $("#one").css("z-index", 9990);
                    showDynamicLayer(viewer, data, () => { // 回调函数 改变弹窗的内容;
                        popUpRef.value.title = pick.id.name;
                        popUpRef.value.pointId = pick.id.id;
                    });
                    // 调用弹框的默认方法
                    popUpRef.value.defalutSetting();
                    // console.log(popUpRef.value)
                    //调用popUp.vue中的methods

                    flyTo(viewer,data)

                }
                else {
                    // 移除弹框
                    if (document.querySelector("#one")) {
                        removeDynamicLayer(viewer, { element: "#one" });
                        $("#one").css("z-index", -1);
                    }
                }

            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        }

        const flyTo=(viewer,data)=>{
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(data.lon, data.lat, 5000),
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
     
        // 创建一个动态实体弹窗
        const showDynamicLayer = (viewer, data, callback) => {
            /* 弹窗的dom操作--默认必须*/
            $(data.element).css({ opacity: 0 }); // 使用hide()或者display是不行的 因为cesium是用pre定时重绘的div导致 left top display 会一直重绘
            $(".dynamic-layer .line").css({ width: 0 });
            $(data.element).find(".main").hide(0);
            /* 弹窗的dom操作--针对性操作*/
            callback();

            // 添加div弹窗
            // const lon = data.lon * 1, lat = data.lat * 1;
            const lon=data.lon,lat=data.lat;
            // console.log(data.lon,data.lat)
            // data.boxHeightMax为undef也没事
            const divPosition = Cesium.Cartesian3.fromDegrees(lon, lat, data.boxHeightMax);
            // 设置弹窗的位置
            const handler = viewer.scene.postRender.addEventListener(() => {
                const canvasPosition = viewer.scene.cartesianToCanvasCoordinates(divPosition);
                if (canvasPosition) {
                    // const x = canvasPosition.x; // 设置横坐标偏移量
                    // const y = canvasPosition.y; // 设置纵坐标偏移量

                    // const x = canvasPosition.x - $(data.element).outerWidth() / 2; // 设置横坐标偏移量
                    // const y = canvasPosition.y - $(data.element).outerHeight(); // 设置纵坐标偏移量
                    // console.log(x,y)
                    $(data.element).css({ left: 310, top: 400 });
                    handler(); // 一次性事件处理后取消监听
                }
            });
            $("#one").css({ opacity: 1, display: "flex" });
            $("#one").find(".line").animate({
                width: 50 // 线的宽度
            }, 500, () => {
                $("#one").find(".main").fadeIn(500);
            });
            // console.log("生成弹窗")

        }


        // 移除动态弹窗 为了方便 这里的移除 是真的移除，因此 到时是需要重建弹窗的doom的
        const removeDynamicLayer = (viewer, data) => {
            document.querySelector(data.element).style.opacity = 0;
        }

        // const destroyViewer =(viewer) =>{
        //     if (viewer){
        //         viewer.destroy();
        //     }

        // }
        // onMounted(init);
        onMounted(() => {
            init()
            // popUpRef.value = this.$refs.popUp;

        })

        // onBeforeUnmount(()=> {
        //     // if (this.viewer && !this.viewer.isDestroyed()) {
        //    destroyViewer();
        //     // }
        // })

        return {
            showDynamicLayer,
            // creatHtmlElement,
            removeDynamicLayer,
            popUpRef,
            // viewer

        };
    },

    //     created() {
    //     this.anotherMethod()
    //   }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cesiumContainer {
    height: 100%;
}


.dynamic-layer {
    display: none;
    user-select: none;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 534px;
    height: 534px;
    // width: 100%; // 这里设置成100%，打算在组件内根据内容设置具体的宽度实践 发现无效
    z-index: 99990;
}

.dynamic-layer .line {
    position: absolute;
    left: 0;
    width: 0;
    /* height: 100px; */
    bottom: 0;
    /* background: url(./img/line.png); */
}

.dynamic-layer .pop {
    display: flex;
    position: absolute;
    // top: 0;
    // left: 30px;
    // right: 0;
    /* bottom: 100px; */
    height: 14vw;
    width: 80vw;
    transform: translateY(-100%);
    //   background: url(~@/assets/map/layer_border.png) no-repeat;
    background-size: 100% 100%;
    color: rgb(5, 5, 5);
    padding: 20px 20px 20px 20px;
    font-size: 14px;
    user-select: text;
    pointer-events: auto;
    background-color: rgba(255, 255, 255, 1);
}


// .cesiumContainer {
//   height: 850px;
//   // width:60%;
// }
</style>