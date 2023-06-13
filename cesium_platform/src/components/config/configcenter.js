export default {
    points: [
      {
        name: '渝北区',
        coordinate: [0.30, 0.59],
        halo: {
          show: true,
        },
        icon: {
        //   src: '/img/flylineChart/mapCenterPoint.png',
          width: 30,
          height: 30
        },
        text: {
          show: true
        }
      },
      {
        name: '开州区',
        coordinate: [0.56, 0.24]
      },
      {
        name: '奉节县',
        coordinate: [0.70, 0.32]
      },
      {
        name: '云阳县',
        coordinate: [0.62, 0.31]
      },
      {
        name: '武隆区',
        coordinate: [0.45, 0.67]
      },
      {
        name: '涪陵区',
        coordinate: [0.40, 0.60]
      },
      {
        name: '丰都县',
        coordinate: [0.47, 0.57]
      },
      {
        name: '忠县',
        coordinate: [0.49, 0.45]
      },
      {
        name: '长寿区',
        coordinate: [0.38, 0.53]
      },
      {
        name: '黔江区',
        coordinate: [0.59, 0.68]
      },
      {
        name: '巫溪县',
        coordinate: [0.69, 0.20]
      },
      {
        name: '城口县',
        coordinate: [0.61, 0.11]
      },
    ],
    lines: [
      {
        source: '开州区',
        target: '渝北区'
      },
      {
        source: '奉节县',
        target: '渝北区'
      },
      {
        source: '云阳县',
        target: '渝北区'
      },
      {
        source: '武隆区',
        target: '渝北区'
      },
      {
        source: '涪陵区',
        target: '渝北区'
      },
      {
        source: '丰都县',
        target: '渝北区'
      },
      {
        source: '忠县',
        target: '渝北区'
      },
      {
        source: '长寿区',
        target: '渝北区'
      },
      {
        source: '黔江区',
        target: '渝北区'
      },
      {
        source: '城口县',
        target: '渝北区'
      },
      {
        source: '巫溪县',
        target: '渝北区'
      }
    ],
    icon: {
      show: true,
    //   src: '/img/flylineChart/mapPoint.png'
    },
    text: {
      show: true,
    },
    bgImgSrc: require('../../assets/chongqingshi.png' )
  }