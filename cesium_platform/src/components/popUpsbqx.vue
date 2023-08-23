<template>
    <el-tree :props="props" :load="loadNode" lazy show-checkbox />
</template>
<script>
// import { ref } from 'vue';

export default {
    setup() {
        const props = {
            label: 'name',
            children: 'zones',
            isLeaf: 'leaf'
        };

        const loadNode = (node, resolve) => {
            if (node.level === 0) {
                const data = [{
                    name: 'GNSS设备',
                    zones: [
                        { name: "GB01", leaf: true },
                        { name: "GB02", leaf: true }
                    ]
                },
                {
                    name: '倾斜监测设备',
                    zones: [
                        { name: "QX01", leaf: true },
                        { name: "QX02", leaf: true }
                    ]
                }];
                return resolve(data);
            }
            if (node.level > 1) return resolve([]);

            setTimeout(() => {
                resolve([]);
            }, 500);
        };

        return {
            props,
            loadNode
        };
    }
};
</script>