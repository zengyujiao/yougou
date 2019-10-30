<template>
  <div>
        <div class="SearchHot">
            <p class="SearchHotP">热门搜索</p>
        </div>
        <div class="SearchHotUl">
            <ul class="SearchHis">
                <li @click.stop="History" v-for="(item,index) in tagger" :key="index">
                    <a onclick="return false;" href="" v-text="item.name"></a>
                </li>
            </ul>
        </div>
        <div class="searchHistory" v-show="floor">
            <div class="searchHistoryT">历史搜索</div>
            <ul class="searchHistoryUl">
                <li><a href=""></a></li>
            </ul>
            <div @click="History" class="searchClean">
                <span id="searchClean">清空历史搜索</span>
            </div>
        </div>
  </div>

</template>
<script>
import observer from "../../tool/observer"
export default {
  data() {
    return {
      floor: false,
      searchText:"",
      tagger: [
        { name: "新款单鞋" },
        { name: "老爹鞋" },
        { name: "小白鞋" },
        { name: "休闲鞋" },
        { name: "跑步鞋" },
        { name: "百丽" },
        { name: "思加图" },
        { name: "阿迪" },
        { name: "天美意" },
        { name: "卫衣" }
      ]
    };
  },
  methods: {
    History() {
      this.floor = !this.floor;
    }
  },
  // mouned(){
  //   observer.on("setSeatchText",(searchText) => {
  //     this.searchText = searchText
  //   })
  // }
};
</script>
<style lang="scss" scoped>
.SearchHot {
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  background: url(../../assets/hot.png) center left no-repeat;
  background-size: 1rem auto;
  background-position: 0.8rem;
}
.SearchHotP {
  margin-left: 2.3rem;
}
.SearchHotUl {
  height: 8rem;
  width: 100%;
}
.SearchHis {
  list-style: none;
}
.SearchHis li {
  float: left;
  margin: 0.4rem;
}
.SearchHis li a {
  display: inline-block;
  height: 2rem;
  width: 5rem;
  background: #eeeeee;
  color: #666;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  line-height: 2rem;
  text-align: center;
}
.searchHistory {
  height: 100%;
  width: 100%;
  background: #fff;
  margin-top: 1rem;
}
.searchHistoryUl li a {
  list-style: none;
  color: #666;
}
</style>