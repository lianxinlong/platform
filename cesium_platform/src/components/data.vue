<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <router-link to="/">主页</router-link>
                <router-link to="/home">首页</router-link>
                <router-link to="/data">数据</router-link>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>这一页写数据</el-main>
            </el-container>
            <el-footer>footer</el-footer>
        </el-container>
    </div>
</template>


<style lang="scss" scoped>
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 800px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 800px; */
    /* padding: 0px; */
    }
</style>

