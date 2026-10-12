window.travelData = {
  // 去过的省份底色高亮（只要去过该省旗下的任意一个市，该省就会自动点亮）
  visitedProvinces: [
    { name: '山东' },
    { name: '内蒙古' }
  ],

  // 以“城市”为最小单位的打卡详情列表
  cities: [
    {
      city: '泰安',
      province: '山东',
      coords: [117.129063, 36.194968], // 泰安市中心经纬度
      date: '2026-05', 
      note: 'dawn',
      tags: ['我们天下第一好', '泰山日出'],
      photos: [
        // 建议换成你在校园或泰山拍的照片
        '/images/travel/taian.jpg'
      ]
    },
    {
      city: '济南',
      province: '山东',
      coords: [117.000923, 36.675807],
      date: '2026-05',
      note: 'pure',
      tags: ['泉城', '大明湖', '芙蓉街'],
      photos: [
        '/images/travel/jinan.jpg'
      ]
    },
    {
      city: '青岛',
      province: '山东',
      coords: [120.382640, 36.067082],
      date: '2026-01',
      note: 'vibrant',
      tags: ['栈桥', '青岛啤酒', '信号山'],
      photos: [
        '/images/travel/qingdao.jpg','/images/travel/qingdao2.jpg'
      ]
    },
    {
      city: '烟台',
      province: '山东',
      coords: [121.391382, 37.539297],
      date: '2025-09',
      note: 'harbor',
      tags: ['孤独的鲸', '海滨日出', '海鲜'],
      photos: [
        '/images/travel/yantai.jpg'
      ]
    },
    {
      city: '呼和浩特',
      province: '内蒙古',
      coords: [111.670801, 40.818311],
      date: '2023-09',
      note: 'vast',
      tags: ['蒙古包', '草原', '沙漠'],
      photos: [
        'https://images.unsplash.com/photo-1508873696983-2df5293cb325?w=600'
      ]
    }
  ]
};