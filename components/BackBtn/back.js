"use strict";
Component({
    properties: {
        color: {
            type: String,
            value: "white"
        },
        delta: {
            type: String,
            optionalTypes: [Number],
            value: 1
        }
    },
    data: {
        bounding: wx.getMenuButtonBoundingClientRect()
    },
    methods: {
        onButtonTap: function () {
            wx.navigateBack({
                delta: this.data.delta
            });
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFja0J0bi9iYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxPQUFPO1NBQ2Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN2QixLQUFLLEVBQUUsQ0FBQztTQUNUO0tBQ0Y7SUFFRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRSxDQUFDLCtCQUErQixFQUFFO0tBQy9DO0lBRUQsT0FBTyxFQUFFO1FBQ1AsV0FBVyxFQUFFO1lBQ1gsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0JhY2tCdG4vYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgY29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogXCJ3aGl0ZVwiXHJcbiAgICB9LFxyXG4gICAgZGVsdGE6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBvcHRpb25hbFR5cGVzOiBbTnVtYmVyXSxcclxuICAgICAgdmFsdWU6IDFcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkYXRhOiB7XHJcbiAgICBib3VuZGluZzogd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25CdXR0b25UYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgIGRlbHRhOiB0aGlzLmRhdGEuZGVsdGFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19
