<template>
    <dv-full-screen-container>
        <div class="app-container">

            <div class="app-header">
                <dv-decoration-8 style="width:660px;height:50px;" />
                <dv-decoration-5 class="app-container-center" style="width:600px;height:40px;" />
                <dv-decoration-8 reverse style="width:660px;height:50px;" />
                <div class="title">地质灾害监测预警平台</div>
                <div class="home">
                    <dv-border-box-8> <router-link class="homebt" to="/home"
                            active-class="active">首页</router-link></dv-border-box-8>

                </div>
                <div class="data">
                    <dv-border-box-8> <router-link class="databt" to="/data"
                            active-class="active">数据</router-link></dv-border-box-8>

                </div>
            </div>
            <!-- <div class="statistics"></div> -->
            <!-- <div class="cesiumContainer" style="height:100%"></div> -->

            <div class="map">
                <!-- 遥感影像 -->
                <!-- <cesiumContainer /> -->
                <!-- 矢量 -->
                <dv-charts :option="optioncenter" />
                <!-- 飞线图 -->
                <!-- <dv-flyline-chart-enhanced :config="configcenter" style="position:relative;left:25%;width:50%;height:100%;" /> -->
            </div>
            <!-- <div class="chart"></div> -->
            <!-- 绝对定位 -->
            <div class="lt fb">
                <dv-border-box-1>
                    <div class="ltile" style="text-align: center;color: white;font-size: 20px;top: 20px;position: relative;">监测设备总数</div>
                    <!-- <dv-digital-flop :config="configlt" style="width:100px;height:50px;" /> -->
                    <dv-capsule-chart :config="configlt" style="left:10px;top:50px;width:480px;height:230px" />
                    <!-- <dv-charts :option="optionlt" /> -->
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


<script setup>

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


// export default {
//   name: 'App',
//   components: {
//     cesiumContainer
//   }
// }


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

.app-header .title {
    color: white;
    font-size: 30px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

.app-header .home {
    width: 100px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 70%;
    text-align: center;

}

.app-header .data {
    width: 100px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 76%;
    text-align: center;
}

.homebt,
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