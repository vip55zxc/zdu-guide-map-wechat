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

        // let marker;
        // const debug = app.globalData.config.debug;
        // const imgUrls = [];
        // switch (options.id) {
        //     case "school":
        //         marker =
        //             app.globalData.markers[app.globalData.markers.length - 1].data[0];
        //         break;
        //     default:
        //         if (!options.index) {
        //             for (const m of app.globalData.markers) {
        //                 for (const i of m.data) {
        //                     if (i.id == options.id) {
        //                         marker = i;
        //                         break;
        //                     }
        //                 }
        //             }
        //         }
        //         else {
        //             marker = app.globalData.markers[options.index].data.filter((m) => m.id == options.id)[0];
        //         }
        //         break;
        // }
        // if (!debug) {
        //     for (let i = 0; i < marker.images; i++) {
        //         imgUrls.push(this.data.cloudRoot +
        //             "images/" +
        //             (marker.short_name || marker.name) +
        //             "/" +
        //             i +
        //             ".jpg");
        //     }
        // }
        // this.setData({
        //     marker,
        //     imgUrls,
        //     logoUrl: marker.logo && !debug
        //         ? this.data.cloudRoot + "logo/" + marker.logo + ".jpg"
        //         : ""
        // });
    }
});
