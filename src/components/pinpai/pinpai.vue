<template>
  <div id="ygSwiperConTwo">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <div
          v-for="(item, index) in tagger"
          :key="index"
          class="weui-media-box__hd"
        >
          <img class="weui-media-box__thumb" :src="item.imgUrl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tagger: [
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253123662.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253140328.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253162890.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253177953.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253203264.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253220254.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253238961.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253257853.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253273217.png"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2018/09/1537253289009.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
#ygSwiperConTwo {
  position: absolute;
  top: 34.466667rem;
}
.weui-panel__bd {
  display: flex;
  flex-wrap: wrap;
}
.weui-media-box__thumb {
  height: 4rem;
  width: 4.6662rem;
}
</style>
