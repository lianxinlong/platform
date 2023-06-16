<template>
<el-row class="tac">
    <el-menu class="menu" width="100%" opacity="1" default-active="2">

        <el-sub-menu index="1" >
            <template #title>
                <span>云阳县</span>
            </template>

            <el-sub-menu index="1-1" >
                <template #title>龙洞场镇安全监测</template>
                <el-sub-menu index="1-1-1" >
                    <template #title>GNSS</template>
                    <el-menu-item index="1-1-1-1">GNSS01</el-menu-item>
                    <el-menu-item index="1-1-1-2">GNSS02</el-menu-item>
                    <el-menu-item index="1-1-1-3">GNSS03</el-menu-item>
                    <el-menu-item index="1-1-1-4">GNSS04</el-menu-item>
                    <el-menu-item index="1-1-1-5">GNSS05</el-menu-item>
                    <el-menu-item index="1-1-1-6">GNSS06</el-menu-item>
                    <el-menu-item index="1-1-1-7">GNSS07</el-menu-item>
                    <el-menu-item index="1-1-1-8">GNSS08</el-menu-item>
                    <el-menu-item index="1-1-1-9">GNSS09</el-menu-item>
                    <el-menu-item index="1-1-1-10">GNSS10</el-menu-item>
                    <el-menu-item index="1-1-1-11">GNSS11</el-menu-item>
                    <el-menu-item index="1-1-1-12">GNSS12</el-menu-item>
                    <el-menu-item index="1-1-1-13">GNSS13</el-menu-item>
                    <el-menu-item index="1-1-1-14">GNSS14</el-menu-item>
                    <el-menu-item index="1-1-1-15">GNSS15</el-menu-item>
                    <el-menu-item index="1-1-1-16">GNSS16</el-menu-item>
                    <el-menu-item index="1-1-1-17">GNSS17</el-menu-item>
                    <el-menu-item index="1-1-1-18">GNSS18</el-menu-item>
                    <el-menu-item index="1-1-1-19">GNSS19</el-menu-item>
                    <el-menu-item index="1-1-1-20">GNSS20</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="1-1-2" >
                    <template #title>深部位移</template>
                    <el-menu-item index="1-1-2-1">SBWY01</el-menu-item>
                    <el-menu-item index="1-1-2-2">SBWY02</el-menu-item>
                    <el-menu-item index="1-1-2-3">SBWY03</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="1-1-3" >
                    <template #title>雨量计</template>
                    <el-menu-item index="1-1-3-1">YL01</el-menu-item>
                </el-sub-menu>
                
            </el-sub-menu>

            <!-- <el-sub-menu index="1-2">
                <template #title>滑坡名称</template>
                <el-menu-item index="1-2-1">GNSS</el-menu-item>
                <el-menu-item index="1-2-2">深部位移</el-menu-item>
            </el-sub-menu> -->

        </el-sub-menu>

        <el-sub-menu index="2">
            <template #title>
                <span>奉节县</span>
            </template>

            <el-sub-menu index="2-1" >
                <template #title>干沟子库岸</template>
                <el-sub-menu index="2-1-1" >
                    <template #title>GNSS</template>
                    <el-menu-item index="2-1-1-1">GNSS01</el-menu-item>
                    <el-menu-item index="2-1-1-2">GNSS02</el-menu-item>
                    <el-menu-item index="2-1-1-3">GNSS03</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="2-1-2" >
                    <template #title>裂缝仪</template>
                    <el-menu-item index="2-1-2-1">LB01</el-menu-item>
                    <el-menu-item index="2-1-2-2">LB02</el-menu-item>
                    <el-menu-item index="2-1-2-3">LB03</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="2-1-3" >
                    <template #title>应力计</template>
                    <el-menu-item index="2-1-3-1">TY01</el-menu-item>
                    <el-menu-item index="2-1-3-2">TY02</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="2-1-4" >
                    <template #title>雨量计</template>
                    <el-menu-item index="2-1-4-1">YL01</el-menu-item>
                </el-sub-menu>
                
            </el-sub-menu>

            <!-- <el-sub-menu index="1-2">
                <template #title>滑坡名称</template>
                <el-menu-item index="1-2-1">GNSS</el-menu-item>
                <el-menu-item index="1-2-2">深部位移</el-menu-item>
            </el-sub-menu> -->

        </el-sub-menu>

        <el-menu-item index="3">
            <span>开州区</span>
        </el-menu-item>

        <el-menu-item index="4">
            <span>武隆区</span>
        </el-menu-item>
        
    </el-menu>
</el-row>
</template>

<script>
export default {

}
</script>

<style>
.el-menu {
    width: 100%;
}

</style>