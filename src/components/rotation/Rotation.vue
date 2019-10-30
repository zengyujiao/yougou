<template>
  <div>
    <carousel class="index-carousel" :autoplay="true" :minSwipeDistance="60" :scrollPerPage="true" :speed="500" :perPage="1" :paginationPadding="-10" :paginationSize="10" :loop="true">
    <slide class="good" v-for="(item,index) in taber" :key="index">
        <div>
            <img id="carousel" :src="item.imgUrl">
        </div>
    </slide>
    </carousel>
  </div>
</template>
<script>
 import {Carousel, Slide} from 'vue-carousel'
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
  components:{
    Carousel,
    Slide
  }
};
</script>
<style scoped>
  #carousel{
    width:100%;
  }
</style>