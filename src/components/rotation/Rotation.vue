<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in taber" :key="index">
        <!-- <img id="swipemt" :src="item.imgUrl" /> -->
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
// import Vue from "vue/dist/vue"
// import { Swipe, SwipeItem } from "mint-ui";
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      taber: [
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568008974410.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/10/1571729535467.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568008969382.jpg"
        }
      ]
    };
  },
  computed: {}
};
</script>
<style scoped>
#swipemt {
  height: 256px;
  width: 4.266667rem;
  position: absolute;
}
</style>
