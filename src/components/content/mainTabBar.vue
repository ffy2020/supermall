<template>
  <div class="mainTabBar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="tab-item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="tab-item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="tab-item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="tab-item-icon" src="~assets/img/tabbar/category.svg" alt />
        <img slot="tab-item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="tab-item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="tab-item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="tab-item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="tab-item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="tab-item-icon" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="tab-item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="tab-item-text">个人中心</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";
export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>