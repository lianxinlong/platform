<script>
import { onMounted } from 'vue';
export default {
    // data: {

    // },
    methods: {
        flyTo() {
            console.log("飞至目标位置")
            const lat = layer.center.lat
            const lng = layer.center.lng
            const z = layer.center.z
            // var heading=layer.center.heading
            // var pitch=layer.center.pitch
            // var alt=layer.center.alt
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(lng, lat, z),
                orientation: {
                    heading: Cesium.Math.toRadians(348.4202942851978),
                    pitch: Cesium.Math.toRadians(-89.74026687972041),
                    roll: Cesium.Math.toRadians(0)
                    // alt:3,
                    // heading:heading,
                    // pitch:pitch,  
                    // alt:alt,

                },
                complete: function callback() {
                    // 定位完成之后的回调函数
                }
            })
        }

    },

    setup() {
        onMounted(() => {
            this.flyTo()
        })
    }
};
</script>
  
