<template>
  <!-- <el-row class="tac">
    <el-menu class="menu" width="100%" opacity="1" default-active="2">
      <el-menu-item index="1">
    
        <span>隐患点信息</span>
      </el-menu-item>
      <el-menu-item index="2">
   
        <span>平面布设</span>
      </el-menu-item>
      <el-menu-item index="3">
      
        <span>设备曲线</span>
      </el-menu-item>
      <el-menu-item index="4">
       
        <span>预警信息</span>
      </el-menu-item>
      <el-menu-item index="5">
    
        <span>倾斜模型</span>
      </el-menu-item>
    </el-menu>
  </el-row> -->
  <el-tabs v-model="activeName" @tab-click="handleClick" :tab-position="'left'">
    <el-tab-pane label="隐患点信息" name="yhdxx">
      <!-- <el-descriptions title="隐患点信息">
        <el-descriptions-item label="地灾名称">吊嘴危岩</el-descriptions-item>
        <el-descriptions-item label="地灾编号">18100000000</el-descriptions-item>
        <el-descriptions-item label="所属区县">奉节县</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">危岩</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="详细地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </el-descriptions> -->
      <popUpyhdxx/>
    </el-tab-pane>
    <el-tab-pane label="平面布设" name="pmbs">
      <popUppmbs/>
    </el-tab-pane>
    <el-tab-pane label="设备曲线" name="sbqx">
      <popUpsbqx/>
    </el-tab-pane>
    <el-tab-pane label="预警信息" name="yjxx">
      <popUpyjxx/>
      <!-- <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="地灾名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="预警信息">
        </el-table-column>
      </el-table> -->
    </el-tab-pane>
    <el-tab-pane label="倾斜模型" name="qxmx">
      <popUpqxmx/>
    </el-tab-pane>
  </el-tabs>
</template>
  
<script>
import popUpyhdxx from './popUpyhdxx.vue'
import popUppmbs from './popUppmbs.vue'
import popUpsbqx from './popUpsbqx.vue'
import popUpyjxx from './popUpyjxx.vue'
import popUpqxmx from './popUpqxmx.vue'


export default {
  components: {
    popUpyhdxx,
    popUppmbs,
    popUpsbqx,
    popUpyjxx,
    popUpqxmx,

    },
  data() {
    return {
      activeName: 'yhdxx',
    }
  },
  //   mounted() {
  //   this.$emit('childReady');
  // },
  methods: {
    defalutSetting() { },
  },
};
</script>
  
