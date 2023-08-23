<template>
    <div>
    <div id="pmbs" style="height:100%;width:100%;position:inherit;">
    </div>
    </div>
</template>

<script>
import { onMounted, onRenderTriggered,onRenderTracked } from 'vue';
export default {

    setup() {
        const init = () => {
            const token = '65f3777bb7d614820e3286b4572abf6a';
            const tdtUrl = 'https://t{s}.tianditu.gov.cn/';
            const viewer = new Cesium.Viewer("pmbs", {
                animation: false, //是否创建动画小器件，左下角仪表
                baseLayerPicker: false, //是否显示图层选择器
                fullscreenButton: false, //是否显示全屏按钮
            });
            viewer._cesiumWidget._creditContainer.style.display = "none"; //隐藏cesium的logo
            viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
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

            viewer.terrainProvider = Cesium.createWorldTerrain();

            viewer.scene.globe.enableLighting = true; //对大气和雾启用动态照明效果
        }

        onMounted(() => {
            init()

        })

        onRenderTracked((event)=>{
            console.log(event)

        })
        onRenderTriggered((event)=>{
            console.log(event)
  
        })

    },
}
</script>

<style scoped lang="scss"></style>