<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="conter">
      <slot name="conter"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
   name:"nav-bar"

};
</script>
<style >
.nav-bar{
   display:flex;
   height:44px;
   line-height:44px;
}
.left,.right{
    width:60px;
}
.conter{
    flex:1;
}

</style>
