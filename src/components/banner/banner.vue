<template>
  <div class="bannersen">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hda">{{ title }}</div>
      <div class="weui-panel__bd">
          <div  v-for="(item, index) in tagger"
          :key="index" class="weui-media-box__hd">
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
      title: "热门分类",
      tagger: [
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599199800.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599208206.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599215890.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599229435.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599343367.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599351453.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599360680.jpg"
        },
        {
          imgUrl:
            "https://i1.ygimg.cn/pics/mobile/homepage/2019/09/1568599368269.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.bannersen {
  position: absolute;
  top: 19.766667rem;
}
.weui-panel__bd{
    display: flex;
    flex-wrap: wrap;
}
.weui-panel__hda{
    font-size:15px;
    color:black;
    height:2.4rem;
    line-height: 3.0rem;
    padding-left:0.966667rem
}
.weui-media-box__thumb{
    height:5.013333rem;
    width:5.7rem
}
</style>
