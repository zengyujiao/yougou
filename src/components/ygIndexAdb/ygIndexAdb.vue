<template>
  <div id="refWz">
    <div id="f1">
      <div class="ygIngexAdb">{{ title }}</div>
      <div v-for="(item, index) in getNews" :key="index" class="sen-new-brand">
        <div class="sen-new-brand-img">
          <img :src="item.bigImgUrl" />
        </div>
        <div class="swiper-container">
          <ul>
            <li class="container">
              <span class="tag">新品</span>
              <img class="container-img" />
              <p class="swiper-price">
                <span class="price">￥64</span>
                <del class="delprice">￥ 63</del>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "品牌专区",
      page: 1
    };
  },
  methods: {
    getNews() {
      // 先在外面把this保存一下
      let _self = this;
      axios
        .get("http://localhost:3000", {
          params: {
            page: this.page++, //Number 页数
            tab: ask, // String 主题分类。目前有 ask share job good
            limit: 20, // Number 每一页的主题数量
            mdrender: false // String 当为 false 时
          }
        })
        .then(data => {
          _self = data;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#f1 {
  position: relative;
  top: 56.5rem;
  height: 100%;
  width: 100%;
  background: #fff;
}
.ygIngexAdb {
  height: 2.533333rem;
  line-height: 2.533333rem;
  font-size: 15px;
}
.sen-new-brand {
  height: 20rem;
}
.sen-new-brand-img {
  height: 10rem;
  background: cornflowerblue;
}
.swiper-container {
  height: 10rem;
}
.container {
  height: 10rem;
  width: 6rem;
  display: flex;
  flex-direction: column;
}
.swiper-container .container .tag {
  display: inline-block;
  height: 1.5rem;
  width: 2rem;
  text-align: center;
  line-height: 1.5rem;
  background: #627;
  margin-left: 4rem;
}
.container .container-img {
  height: 6rem;
  width: 6rem;
}
.swiper-price {
  height: 2.5rem;
  width: 6rem;
  text-align: center;
}
.swiper-price .price {
  display: inline-block;
  height: 1.5rem;
  width: 2rem;
  line-height: -3rem;
  margin-top: 0.5rem;
}
.swiper-price .delprice {
  display: inline-block;
  height: 1.5rem;
  width: 2rem;
  line-height: -3rem;
  margin-top: 0.4rem;
}
</style>
