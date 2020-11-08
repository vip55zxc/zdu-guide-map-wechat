Page({
    data: {
        panoramaUrl: 'https://720yun.com/t/d7fjurkkeO7?scene_id=21492712'
    },
    onLoad(options) {
        console.log(options);
        this.setData({
            panoramaUrl: this.data.panoramaUrl += options.id
        });
    }
});
