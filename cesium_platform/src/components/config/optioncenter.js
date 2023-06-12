import $ from 'jquery'
import Charts from '@jiaminghi/charts'
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import chongqingshiJson from '../../assets/chongqingshi.json'
// myChart.showLoading();
// const container =document.getElementById('map')

// const myChart = new Charts(container)

echarts.registerMap('chongqingshi', chongqingshiJson);
const optioncenter={
    title: {
        text: '这里放重庆地图',
        style: {
            fill: 'rgba(255, 255, 255, 1)'
        }
    },

    series: [
        {
            name: 'chongqingshi',
            type: 'map',
            map: 'chongqingshi',
        }
    ]
    
}
console.log(optioncenter)
console.log(optioncenter.series)
console.log(optioncenter.series.map)
export default optioncenter