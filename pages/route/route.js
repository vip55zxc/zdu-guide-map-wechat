Page({
  data: {
    version: "0.1.0",
    logList: [
      {
        version: "0.1.0",
        date: "2020-08-16",
        log: ["1.支持地图导览。", "2.支持在校游览路线", "3.支持客服功能"],
      },
      {
        version: "-交通",
        date: "2020-08-28",
        log: [
          "1.乘坐地铁1号线到大毕庄",
          "2.乘坐地铁1号线到李楼再乘坐滴滴",
          "3.开车自打达",
          "--------------------------",
          "--------------------------",
          "注：这是测试数据瞎编的",
          "如若需要，请联系QQ：964186197 或 VX: VIP55DNA",
        ],
      },
    ].reverse(),
    bounding: wx.getMenuButtonBoundingClientRect(),
  },
  // onLoad: function () {
  //  console.log(wx.getMenuButtonBoundingClientRect())
  // },
  getLink: function (e) {
    let link = e.currentTarget.dataset.link;
    tui.copy(link, "链接复制成功");
  },
});
