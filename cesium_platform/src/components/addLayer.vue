<script>
import { onMounted } from 'vue';
export default {
    // data: {

    // },
    methods: {
        addEntities() {
            console.log('添加点位');
            const Cesium = this.cesium;
            // 清除上一次加载的点位
            this.viewer.entities.removeAll();
            // foreach循环加载点位
            this.pointInfo.forEach((pointObj) => {
                this.viewer.entities.add({
                    name: pointObj.psName,
                    code: pointObj.id,
                    id: pointObj.id,
                    position: Cesium.Cartesian3.fromDegrees(
                        pointObj.longitude * 1,
                        pointObj.latitude * 1
                    ),
                    // 点
                    point: {
                        pixelSize: 5,
                        color: Cesium.Color.RED,
                        outlineColor: Cesium.Color.WHITE,
                        outlineWidth: 2,
                    },
                });
            });
        },

    },
    setup() {
        onMounted(() => {
            this.addEntities()

        })
    }
};
</script>
  
