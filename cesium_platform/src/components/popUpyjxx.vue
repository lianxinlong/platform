<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="地灾名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="预警信息" width="1000">
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    methods: {
        defalutSetting() { },
    },
}
</script>