<template>
  <div id="box">
    <Header />
    <!-- <Rotation /> -->
    <Boar />
    <Banner />
    <Ygswiper />
    <Pinpai />
    <Seckill />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
// import Rotation from "@/components/rotation/Rotation.vue";
import Boar from "@/components/boar/boar.vue";
import Banner from "@/components/banner/banner.vue";
import Ygswiper from "@/components/ygSwiperSlide/ygSwiperSlide.vue";
import Pinpai from "@/components/pinpai/pinpai.vue";
import Seckill from "@/components/seckill/seckill.vue";
export default {
  components: {
    Header,
    // Rotation,
    Boar,
    Banner,
    Ygswiper,
    Pinpai,
    Seckill
  }
};
</script>
<style scoped>
#box {
  position: relative;
}
</style>
