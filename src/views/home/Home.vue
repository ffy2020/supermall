<template>
  <div class="Home">
    <nav-bar class="home-nar">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>


<script>
import NavBar from "../../components/common/navbar/Navbar";
import { getHomeMultidata } from "../../network/home";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res+'456')
      // this.result = res.date.banners.list;
      // this.recommends=res.recommends.list;


    });
  }
};
</script>

<style >
.home-nar {
  margin-left: 0;
}
</style>
