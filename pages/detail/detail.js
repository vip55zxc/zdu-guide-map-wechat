import { MockMarkers } from '../../mock/markers';
Page({
    data: {
        marker: {},
        logoUrl: "",
        imgUrls: []
    },
    previewImage(e) {
        wx.previewImage({
            current: this.data.imgUrls[e.target.dataset.id],
            urls: this.data.imgUrls
        });
    },
    navigateTo(e) {
        switch (e.target.id) {
            case "address":
            case "navigate":
                wx.openLocation({
                    latitude: Number(this.data.marker.latitude),
                    longitude: Number(this.data.marker.longitude),
                    name: this.data.marker.name,
                    scale: 15
                });
                break;
            case "phone":
                wx.makePhoneCall({
                    phoneNumber: this.data.marker.contact.phone
                });
                break;
            case "panorama":
                wx.navigateTo({
                    url: `/pages/web-view/web-view?id=${this.data.marker.panorama}`
                });
                break;
            default:
                break;
        }
    },
    onLoad(options) {
      const  markerId  =JSON.parse( options.queryString);
      const { type, name} = markerId
      console.log(MockMarkers.filter(it=>it.type===type)[0].data.filter(it=>it.name===name)[0])
      const data = MockMarkers.filter(it=>it.type===type)[0].data.filter(it=>it.name===name)[0];
      this.setData({
        marker:{
          logo:data.logo,
          name:data.name,
          desc:data.desc,
          latitude:data.latitude,
          longitude:data.longitude,
          panorama:data.panorama,
          contact:{
            address:data.contact.address,
            phone:data.contact.phone,
          },
          video:{
            src:data.video.src,
            owner:data.video.owner
          }
        },
        imgUrls:data.images,
      })
    }
});
