<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo">
            <template v-for="(item, index) in menuList">
                <el-submenu v-if="item.child && item.child.length > 0" :key="item.id" :index="item.id">
                    <template #title>
                        <span>云阳县</span>
                    </template>
                    <span :style="'padding-left:' + (index * 20) + 'px'">
                        <!-- 递归子节点（注意这里的回调是必须的，否则父页面回调不能正常传回） -->
                        <LeftRegionMenu @menuChange="regionMenuChanage" style="padding-left: 16px;"
                            :menuList="item.child" />
                    </span>
                </el-submenu>
                <el-menu-item @click="menuClick(item.id)" v-else :key="item.id"
                    :index="item.id">{{ item.name }}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
  
<script>
// 注意这里是引入的组件自身，因为子节点无限所以需要递归自身实现！
import LeftRegionMenu from "./LeftRegionMenu";

export default {
    name: "LeftRegionMenu",
    components: {
        LeftRegionMenu
    },
    props: {
        menuList: {
            // 模拟数据
            default: [
                {
                    name: "一级菜单2",
                    id: "2",
                    child: [
                        { name: "二级菜单2-1", id: "2-1" },
                        {
                            name: "二级菜单2-2",
                            id: "2-2",
                            child: [{ name: "三级菜单1", id: "2-2-1" }]
                        },
                        {
                            name: "二级菜单2-3",
                            id: "2-3",
                            child: [{ name: "三级菜单1", id: "2-3-1" }]
                        }
                    ]
                },
                {
                    name: "一级菜单3",
                    id: "3",
                    child: [{ name: "二级菜单3-1", id: "3-1" }]
                },
                {
                    name: "一级菜单4",
                    id: "4",
                    child: [
                        {
                            name: "二级菜单4-1",
                            id: "4-1",
                            child: [
                                {
                                    name: "三级菜单",
                                    id: "4-1-1",
                                    child: [{ name: "四级菜单", id: "4-1-1-1" }]
                                },
                                { name: "三级菜单", id: "4-1-2" }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        // 原始引入页面的回调
        menuClick(id) {
            console.log(id);
            this.$emit("menuChange", id);
        },
        // 组件本身使用的回调（无限递归的子组件会通过这个一级一级回传到原始引入页面）
        regionMenuChanage(id) {
            this.$emit("menuChange", id);
        }
    }
};
  // 这部分样式自己按需修改或删除
</script>
<style>
.el-col-12 {
    width: 95%;
}
</style>
  
  