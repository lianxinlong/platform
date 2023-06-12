export default {
  title: {
    text: '区县地灾点占比图',
    // 标题颜色
    style: {
      fill: 'rgba(255, 255, 255, 1)'
    }
  },

  series: [
    {
      type: 'pie',
      data: [
        { name: '长寿区', value: 93 },
        { name: '忠县', value: 32 },
        { name: '奉节县', value: 65 },
        { name: '武隆区', value: 44 },
        { name: '黔江区', value: 52 },
        { name: '云阳县', value: 52 },
      ],
      insideLabel: {
        show: true
      },
      outsideLabel:{
        style: {
          fontSize: 20,
          fill:'rgba(255, 255, 255, 1)'
        }
      },
      roseType: true
    }
  ]
}