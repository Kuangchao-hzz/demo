<template>
  <div class="amap-page-container">
    <el-amap
      vid="amapDemo"
      :center="center"
      :zoom="zoom"
      class="amap-demo"
      :events="events">
      <el-amap-marker v-for="marker in markers"
                      :position="marker.position"
                      :events="marker.events"
                      :visible="marker.visible"
                      :draggable="marker.draggable"></el-amap-marker>
    </el-amap>
    <div class="toolbar">
      position: [{{ lng }}, {{ lat }}] address: {{ address }}
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      let self = this;
      return {
        zoom: 14,
        center: [121.5273285, 31.21515044],
        markers: [
          {
            position: [121.5273285, 31.21515044],
            events: {
              click: () => {
                alert('click marker');
              },
              dragend: (e) => {
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
              }
            },
            visible: true,
            draggable: false
          }
        ],
        address: '',
        events: {
          click(e) {
            let { lng, lat } = e.lnglat;
            self.lng = lng;
            self.lat = lat;
            // 这里通过高德 SDK 完成。
            var geocoder = new AMap.Geocoder({
              radius: 1000,
              extensions: "all"
            });
            geocoder.getAddress([lng ,lat], function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                if (result && result.regeocode) {
                  self.address = result.regeocode.formattedAddress;
                  self.$nextTick();
                }
              }
            });
          }
        },
        lng: 0,
        lat: 0
      };
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scope>
  .amap-demo {
    height: 300px;
  }
</style>
