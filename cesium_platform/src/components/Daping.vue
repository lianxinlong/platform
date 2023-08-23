<template>
    <dv-full-screen-container>
        <div class="app-container">

            <div class="app-header">
                <dv-decoration-8 style="width:660px;height:80px;" />
                <dv-decoration-5 class="app-container-center" style="width:600px;height:100px;" />
                <dv-decoration-8 reverse style="width:660px;height:80px;" />
                <div class="pretitle">
                    <span>重庆地质矿产研究院</span>
                </div>
                <div class="title">
                    <img src='../assets/logo.png' alt="图标">
                    <span>地质灾害监测预警平台</span>
                </div>
                <div class="GZ">
                    <dv-border-box-8> <router-link class="GZbt" to="/GZ"
                            active-class="active">规资</router-link></dv-border-box-8>

                </div>
                <div class="YJ">
                    <dv-border-box-8> <router-link class="YJbt" to="/YJ"
                            active-class="active">应急</router-link></dv-border-box-8>

                </div>
                <div class="JT">
                    <dv-border-box-8> <router-link class="JTbt" to="/JT"
                            active-class="active">交通</router-link></dv-border-box-8>

                </div>
                <div class="SL">
                    <dv-border-box-8> <router-link class="SLbt" to="/SL"
                            active-class="active">水利</router-link></dv-border-box-8>

                </div>
                <div class="data">
                    <dv-border-box-8> <router-link class="databt" to="/data"
                            active-class="active">数据</router-link></dv-border-box-8>

                </div>
            </div>
            <!-- <div class="statistics"></div> -->
            <!-- <div class="cesiumContainer" style="height:100%"></div> -->

            <!-- <div class="map" style="position:relative;left:26%;width:48%;height:100%;"> -->
            <!-- 遥感影像 -->
            <!-- <cesiumContainer /> -->
            <!-- </div> -->

            <dv-flyline-chart-enhanced :config="configcenter" :dev="true"
                style="position:absolute;width:100%;height:100%;" />


            <div class="map" ref='map' style="z-index: 999;">
                <!-- <div class="map" ref='map'> -->
                <!-- 矢量 -->
                <!-- <dv-charts :option="optioncenter" /> -->
                <!-- 飞线图 -->
                <!-- <dv-flyline-chart-enhanced :config="configcenter" 
                    style="position:relative;left:15%;width:70%;height:100%;" />  -->
                <!-- :dev='true'  -->
            </div>
            <!-- <div class="chart"></div>  -->
            <!-- 绝对定位  -->
            <div class="lt fb">
                <dv-border-box-1>
                    <!-- <div class="ltile"
                        style="text-align: center;color: white;font-size: 20px;top: 20px;position: relative;">监测设备总数</div> -->
                    <!-- <dv-digital-flop :config="configlt" style="width:100px;height:50px;" /> -->
                    <!-- <dv-capsule-chart :config="configlt" style="left:10px;top:50px;width:480px;height:230px" /> -->
                    <dv-charts :option="optionlt" style="left:10px;width: 480px;height: 380px;" />
                </dv-border-box-1>
            </div>
            <div class="lb fb">
                <dv-border-box-1>
                    <!-- <dv-scroll-board :config="configlb" style="left:10px;top:10px;width:480px;height:280px;" /> -->
                    <dv-charts :option="optionlb" />
                </dv-border-box-1>
            </div>
            <div class="rt fb">
                <dv-border-box-1>
                    <!-- <dv-capsule-chart :config="configrt" style="left:10px;top:10px;width:480px;height:280px" /> -->
                    <dv-charts :option="optionrt" />
                </dv-border-box-1>
            </div>
            <div class="rb fb">
                <dv-border-box-1>
                    <!-- <dv-capsule-chart :config="configrt" style="left:10px;top:10px;width:480px;height:280px" /> -->
                    <dv-charts :option="optionrb" />
                </dv-border-box-1>
            </div>
        </div>

    </dv-full-screen-container>
</template>


<!-- <script setup>
import * as echarts from 'echarts';

import cesiumContainer from './cesiumContainer.vue'


import configlt from './config/configlt.js';
import configlb from './config/configlb.js';
import configrt from './config/configrt.js';
import configrb from './config/configrb.js';
import configcenter from './config/configcenter.js';
import optionlt from './config/optionlt.js';
import optionlb from './config/optionlb.js';
import optionrt from './config/optionrt.js';
import optionrb from './config/optionrb.js';

import optioncenter from './config/optioncenter.js';

</script> -->


<script>
import { defineComponent, ref, onMounted } from 'vue';
import * as echarts from 'echarts';
// import cesiumContainer from './cesiumContainer.vue';
import configlt from './config/configlt.js';
// import configlb from './config/configlb.js';
// import configrt from './config/configrt.js';
// import configrb from './config/configrb.js';
import configcenter from './config/configcenter.js';
import optionlt from './config/optionlt.js';
import optionlb from './config/optionlb.js';
import optionrt from './config/optionrt.js';
import optionrb from './config/optionrb.js';
// import optioncenter from './config/optioncenter.js';
import chongqingshiJson from '../assets/chongqingshi.json';
// import dvCharts from 'dv-charts'

// echarts.registerMap('chongqingshi', chongqingshiJson);

export default defineComponent({
    components: {},
    setup() {
        const isChartReady = ref(false);
        // const chartData = ref({});

        const map = ref(null);
        onMounted(() => {

            // 初始化 ECharts
            echarts.registerMap('chongqingshi', chongqingshiJson);

            // 获取 DOM 元素
            setTimeout(() => {
                const mapchart = echarts.init(map.value);
                mapchart.setOption({
                    // title: {
                    //     text: '重庆地图',

                    // },
                    // tooltip: {
                    //     trigger: 'item',
                    //     // formatter: '{b}<br/>{c} (p / km2)'
                    // },
                    // toolbox: {
                    //     show: true,
                    //     orient: 'vertical',
                    //     left: 'right',
                    //     top: 'center',
                    //     feature: {
                    //         dataView: { readOnly: false },
                    //         restore: {},
                    //         saveAsImage: {}
                    //     }
                    // },
                    // visualMap: {
                    //     min: 800,
                    //     max: 50000,
                    //     text: ['High', 'Low'],
                    //     realtime: false,
                    //     calculable: true,
                    //     inRange: {
                    //         color: ['lightskyblue', 'yellow', 'orangered']
                    //     }
                    // },
                    series: [
                        {
                            name: '重庆市',
                            type: 'map',
                            map: 'chongqingshi',
                            roam: 'true',
                            aspectScale: 0.9,
                            zoom: 1.2,
                            // label: {
                            //     show: true,
                            //     color:'rgba(255,255,255,1)'
                            // },
                            itemStyle: {
                                areaColor: 'rgba(255,255,255,0.1)',

                                // 设置边框的颜色和宽度
                                // borderColor: 'rgba(255,255,255,1)',
                                borderColor: 'rgba(255,255,255,1)',
                                borderWidth: 2,
                                //阴影
                                shadowStyle: {
                                    shadowColor: 'rgba(255, 255, 255, 0.5)',
                                    shadowBlur: 100
                                },
                                // opacity:0.5, 

                            },
                            // shadowStyle: {
                            //     shadowColor: 'rgba(255, 255, 255, 0.5)',
                            //     shadowBlur: 100
                            // },
                            emphasis: {
                                label: {
                                    color: 'rgba(255,255,255,1)',
                                    fontSize: 15,
                                },
                                itemStyle: {
                                    areaColor: 'rgba(255,255,255,0.1)',
                                }
                            }
                        }
                    ],
                });
                isChartReady.value = true;
            }, 0);
        });

        return {
            map,
            isChartReady,
            // chartData,
        };
    },
    data() {
        return {
            configlt,
            optionlt,
            // optioncenter, // 这里定义optioncenter变量并赋初值
            optionlb,
            optionrb,
            optionrt,
            configcenter,
            // isChartReady: false,
        };
    },
    computed: {
        key() {
            return this.$route.path + Math.random();
        }

    },

    methods: {

    },
});
</script>



<style>
body {
    margin: 0;
    /* padding: 0; */
}

/* 统一的padding */
.app-container {
    height: 100%;
    width: 100%;
    padding: 8px;
    background-image: url(../assets/bg.png);
    background-size: 100% 100%;
}

.app-header {
    height: 100px;
    display: flex;
    justify-content: space-between;
    position: relative
}

.app-container-center {
    transform: translateY(30px);
}


.app-header .pretitle{
    color: white;
    font-size: 28px;
    font-weight: 700;
    position: absolute;
    left: -3%;
    transform: translate(50%);

    display: inline-flex;
    /* 让图片和文字在同一行，不换行 */
    align-items: center;
}


.app-header .title {
    color: white;
    font-size: 36px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    transform: translate(-50%);

    display: inline-flex;
    /* 让图片和文字在同一行，不换行 */
    align-items: center;
    /* 垂直居中文字和图片 */
}

.app-header .title img {
    margin-right: 8px;
    /* 图片和文字之间的间距 */
    width: 55px;
    /* 图片宽度 */
    height: 45px;
    /* 图片高度 */
}


.app-header .GZ {
    width: 100px;
    height: 45px;
    position: absolute;
    top: 50%;
    left: 11%;
    text-align: center;

}

.app-header .YJ {
    width: 100px;
    height: 45px;
    position: absolute;
    top: 50%;
    left: 17%;
    text-align: center;

}

.app-header .JT {
    width: 100px;
    height: 45px;
    position: absolute;
    top: 50%;
    left: 23%;
    text-align: center;

}

.app-header .SL {
    width: 100px;
    height: 45px;
    position: absolute;
    top: 50%;
    left: 29%;
    text-align: center;

}


.app-header .data {
    width: 100px;
    height: 45px;
    position: absolute;
    top: 50%;
    left: 66%;
    text-align: center;
}

.GZbt,
.GZbt,
.YJbt,
.JTbt,
.SLbt,
.databt {
    color: white;
    font-size: 30px;
    text-align: center;
    text-decoration: none;
}

/* .statistics {
    height: 100px;
} */

.map {
    height: 820px;
}

/* .chart {
    height: 200px;
} */

.fb {
    width: 500px;
    height: 300px;
}

.lt,
.lb,
.rt,
.rb {
    position: fixed;

}

.lt {
    left: 0;
    top: 110px;
    /* background-image: linear-gradient(to right, #080808,#fcfcfc);
    opacity:0.5;   */

}

.lb {
    left: 0;
    bottom: 150px;
    /* background-image: linear-gradient(to right, #080808,#fcfcfc);
    opacity:0.5;   */
}

.rt {
    right: 0;
    top: 110px;
    /* background-image: linear-gradient(to left, #080808,#fcfcfc);
    opacity:0.5;   */
}

.rb {
    right: 0;
    bottom: 150px;
    /* background-image: linear-gradient(to left, #080808,#fcfcfc);
    opacity:0.5;   */
}</style>