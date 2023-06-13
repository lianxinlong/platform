// import $ from 'jquery'
// import Charts from '@jiaminghi/charts'
// import * as echarts from 'echarts';
// import { onMounted } from 'vue';
// import chongqingshiJson from '../../assets/chongqingshi.json'
// // myChart.showLoading();
// // const container =document.getElementById('map')

// // const myChart = new Charts(container)

// echarts.registerMap('chongqingshi', chongqingshiJson);
// const optioncenter={
//     title: {
//         text: '这里放可交互重庆地图',
//         style: {
//             fill: 'rgba(255, 255, 255, 1)'
//         }
//     },

//     series: [
//         {
//             name: 'chongqingshi',
//             type: 'map',
//             mapType: 'chongqingshi',
//         }
//     ]
    
// }

// export default optioncenter


import * as echarts from 'echarts';
// import 'echarts/map/js/china';
// import optioncenter from './config/optioncenter';
import chongqingshiJson from '../../assets/chongqingshi.json';

// 注册地图数据
echarts.registerMap('chongqingshi', chongqingshiJson);
const optioncenter={
    title: {
        text: '这里放可交互重庆地图',
        style: {
            fill: 'rgba(255, 255, 255, 1)'
        }
    },

    series: [
        {
            name: 'chongqingshi',
            type: 'map',
            mapType: 'chongqingshi',
        }
    ]
    
}
export default optioncenter