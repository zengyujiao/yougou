<template>
  <div id="box">
    <Header class="header" />
      <Rotation />
      <Boar />
      <Banner />
      <Ygswiper />
      <Pinpai />
      <Seckill />
      <YgIndexAd />
      <YgIndexAdb />
    <Tabber class="taber"/>
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Rotation from "@/components/rotation/Rotation.vue";
import Boar from "@/components/boar/boar.vue";
import Banner from "@/components/banner/banner.vue";
import Ygswiper from "@/components/ygSwiperSlide/ygSwiperSlide.vue";
import Pinpai from "@/components/pinpai/pinpai.vue";
import Seckill from "@/components/seckill/seckill.vue";
import YgIndexAd from "@/components/ygIndexAd/ygIndexAd.vue";
import YgIndexAdb from "@/components/ygIndexAdb/ygIndexAdb.vue";
import Tabber from "@/components/tabber/tabber.vue";
export default {
  components: {
    Header,
    Rotation,
    Boar,
    Banner,
    Ygswiper,
    Pinpai,
    Seckill,
    YgIndexAd,
    YgIndexAdb,
    Tabber
  }
};
</script>
<style scoped>
#box {
  position: relative;
  display: flex;
  flex-direction: column
}
</style>
