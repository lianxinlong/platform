export default {
    points: [
      {
        name: '渝北区',
        coordinate: [0.48, 0.35],
        halo: {
          show: true,
        },
        icon: {
        //   src: '/img/flylineChart/mapCenterPoint.png',
          width: 30,
          height: 30
        },
        text: {
          show: false
        }
      },
      {
        name: '开州区',
        coordinate: [0.52, 0.23]
      },
      {
        name: '奉节县',
        coordinate: [0.43, 0.29]
      },
      {
        name: '云阳县',
        coordinate: [0.59, 0.35]
      },
      {
        name: '武隆区',
        coordinate: [0.53, 0.47]
      },
      {
        name: '涪陵区',
        coordinate: [0.45, 0.54]
      },
      {
        name: '丰都县',
        coordinate: [0.36, 0.38]
      },
      {
        name: '忠县',
        coordinate: [0.62, 0.55]
      },
      {
        name: '长寿区',
        coordinate: [0.56, 0.56]
      },
      {
        name: '黔江区',
        coordinate: [0.37, 0.66]
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
      }
    ],
    icon: {
      show: true,
    //   src: '/img/flylineChart/mapPoint.png'
    },
    text: {
      show: true,
    },
    bgImgSrc: require('../../assets/chongqingshi1.png' )
  }