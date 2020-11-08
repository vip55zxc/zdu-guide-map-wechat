// pages/components/tab/tab.js
Component({
	/**
   * 组件的属性列表
   */
	properties: {
		tabList: Array,
		currentTab: {
			type: Number,
			value: 0
		}
	},

	/**
   * 组件的初始数据
   */
	data: {
		currentTab: 0,
    showPopup:false,
    display:true,
	},
	created () {
		this.setData({
			currentTab: this.properties.currentTab
		});
	},
	/**
   * 组件的方法列表
   */
	methods: {
		/**
		 *  点击 tabs 里的选项
		 */
		onClickTab: function (event) {
      // 使手机振动15ms
      wx.vibrateShort();
			const index = event.currentTarget.dataset.index;
			if (this.properties.currentTab === index) {
				return false;
			}
			this.setData({
				currentTab: index
			});
			this.triggerEvent('clickTab', {
				current: event.currentTarget.dataset.current
			});
		},

		/**
		 *  点击更多
		 */
    onClickMore: function (event) {
      wx.vibrateShort(); // 使手机振动15ms
      this.setData({
        display: !event.currentTarget.dataset.current
      });
    },

		/**
		 *  点击更多菜单里的选项
		 */
    onClickGridItem:function(event){
			wx.vibrateShort();
			const index = event.currentTarget.dataset.index;
			if (this.properties.currentTab === index) {
				return false;
			}
			this.setData({
				currentTab: index
			});
			this.triggerEvent('clickTab', {
				current: event.currentTarget.dataset.current
			});
      this.setData({ display:true})
		},
		/**
		 *  滑动 tabs
		 */
		onBinddragging:function(){
      wx.vibrateShort(); // 使手机振动15ms
    },
	}
});
