// pages/show-map/show-map.js
import { INDOOR_KEY } from '../../config/appConfig';
import { MockMarkers } from '../../mock/markers';
import { MockRoutes } from '../../mock/routes';
Page({
  data: {
    key: INDOOR_KEY,
    popupShow:false,
    isRouterInfo:false, 
    currentRouter:-1,
    initMap: {
      latitude: '39.011100',
      longitude: '117.386169',
    },
    bounding: wx.getMenuButtonBoundingClientRect(),
  },
  onLoad: function () {
    this.init();
    this.includePoints(100);
  },
  
  /****************** 初始化 *******************/
  init(){
    this.mapCtx = wx.createMapContext('myMap')
    this.setData({ tabs: MockMarkers.reverse().filter(it=>it.type!=='校区'),routes: MockRoutes });
    const { data, icon, position, scale, type, _id } = MockMarkers.filter(
      it => it.type === '景点'
    )[0];
    this.setData({
      markers: data.map((it) => {
        return {
          // 坐标
          iconPath: `/assets/markers/${icon}.png`,
          id: JSON.stringify({ type, name: it.name }),
          callout: {
            content: it.name,
            padding: 5,
            borderRadius: 2,
            anchorY: 0,
            display: 'ALWAYS',
          },
          latitude: it.latitude,
          longitude: it.longitude,
          width: '34px',
          height: '44px',
        };
      }),
    });
  },

  /****************** 控制视图边距 *******************/
  includePoints(padding){
    this.mapCtx.includePoints({ 
      padding: [padding,padding,padding,padding],
      points: this.data.markers
    });
  },

  /****************** 切换Tab栏 *******************/
  clickTab(event) {
		const { data, icon, position, scale, type, _id } = event.detail.current;
    this.setData({
      markers: data.map((it) => {
        return {
          // 坐标
          iconPath: `/assets/markers/${icon}.png`,
          id: JSON.stringify({ type, name: it.name }),
          callout: {
            content: it.name,
            padding: 5,
            borderRadius: 2,
            anchorY: 0,
            display: 'ALWAYS',
          },
          latitude: it.latitude,
          longitude: it.longitude,
          width: '34px',
          height: '44px',
        };
      }),
		});
    this.includePoints(100)
  },

  /****************** 跳转页面 *******************/
  onToPage(value) {
    const that = this;
    // school 去学校介绍  path 去路径介绍 // 其他一律去介绍详情页面
    const { type } = value.currentTarget.dataset;
    const { markerId } = value;
    switch (type) {
      case 'school':
        that.navigateTo(
          '../detail/detail?queryString={"type":"校区","name":"天津中德应用技术大学"}'
        );
        break;
      case 'path':
        that.navigateTo('../route/route');
        break;
      default:
        that.navigateTo(`../detail/detail?queryString=${markerId}`);
        break;
    }
  },
  navigateTo(url) {
    wx.vibrateShort();
    wx.navigateTo({ url: url });
  },
  /**
   * TODO: 判断用户当前位置是否在学校内算法
   * 获取个人位置信息
   */
  onClickLocation(e) {
    wx.vibrateShort();
    let that = this;
    // const zd = {
    // 	Ncoordinate:{latitude:'39.015333',longitude:'117.384925'},  // 北
    // 	Scoordinate:{latitude:'39.007196',longitude:'117.384260'},  // 南
    // 	Wcoordinate:{latitude:'39.012898',longitude:'117.379689'},  // 西
    // 	Ecoordinate:{latitude:'39.009864',longitude:'117.394216'},  // 东
    // }
    wx.getLocation({
      type: 'gcj02',
      isHighAccuracy: true,
      success(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        that.setData({
          initMap: {
            latitude,
            longitude,
            showPosition: true,
          },
          scale: 18,
        });
      },
    });
  },

 /****************** 游览路线 *******************/
  onClickPlay() {
    wx.vibrateShort();
    this.setData({ tabs: MockMarkers.reverse(),routes: MockRoutes });
    this.setData({popupShow:true})
  },

  /****************** 点击游览路线 *******************/
  onClickPopup(e){
    wx.vibrateShort();
    const routerInfo = e.currentTarget.dataset.current
    this.setData({
       markers: routerInfo.data.filter(it=>it.name).map((it) => {
        return {
          iconPath: `/assets/markers/jd.png`,
          id: JSON.stringify({ type:'景点', name: it.name }),
          callout: {
            content: it.name,
            padding: 5,
            borderRadius: 2,
            anchorY: 0,
            display: 'ALWAYS',
          },
          latitude: it.latitude,
          longitude: it.longitude,
          width: '34px',
          height: '44px',
        };
      }),
      polyline: [{
        points: routerInfo.data,
        color:"#5983FC",
        width: 12,
        dottedLine: true,
        arrowLine:true,
      }],
      popupShow:false, 
      isRouterInfo:true,
      routerInfo:{
        name:routerInfo.name,
        data:routerInfo.data.filter(it=>it.name)
      }
    })
    this.includePoints(100);
  },

  /****************** 点击景点详情 *******************/
  onClickRouter(e){
    const that = this;
    const index = e.currentTarget.dataset.index;
    const {latitude,longitude} =e.currentTarget.dataset.current
		if (that.data.currentRouter === index) 	return false;
    wx.vibrateShort();
    that.setData({	
      currentRouter: index,
      scale: 18,
      initMap: {
        latitude: latitude,
        longitude: longitude,
      }
    });
  },

  /****************** 点击关闭 *******************/
  onClickClose(){
    wx.vibrateShort();
    this.init();
    this.includePoints(100);
    this.setData({isRouterInfo:false, currentRouter:0, polyline:null})
  }
});
