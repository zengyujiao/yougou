<template>
  <div>
    <div id="slider" class="mui-slider" >
			<div class="mui-slider-group mui-slider-loop">
				<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568008969382.jpg">
					</a>
				</div>
				<!-- 第一张 -->
				<div v-for="(item,index) in taber" :key="index" class="mui-slider-item">
					<a href="#">
						<img :src="item.imgUrl">
					</a>
				</div>
				<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568008974410.jpg">
					</a>
				</div>
			</div>
			<div class="mui-slider-indicator">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
			</div>
		</div>
  </div>
</template>
<script>
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
  methods:{
  }
};
</script>
<style scoped>
#swipemt {
  height: 256px;
  width: 100%;
  position: absolute;
}
.swiper-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.swiper-wrapper {
  height: 200px;
}

.swiper-slide img {
  max-width: 100%;
}
</style>