<template>
  <div>
    <header id="headerW">
      <div class="lftarea lftareaNo">
        <a href="javascript:history.go(-1);">
          <img src="http://m.yougou.com/images/new-back.png" width="15" alt />
        </a>
      </div>
      <h2 class="title" id="tit"><slot></slot></h2>
      <div class="sitebar">
        <a href="" class="main">登录</a>
        <a @click="mainNav" href="#" id="mainnav">
          <img src="http://m.yougou.com/images/ico-menu.png" width="20" alt="menu" />
        </a>
      </div>
    </header>
    <div v-show="foot" class="navmenu" id="ygnavmenu" style="display: block;">
      <div class="bd">
        <ul>
          <router-link v-for="(item,index) in tager" :key="index" :class="{itemfoucs:changRed ==index}" @click="change(index)" :to="{name:item.url}" tag="li">
            <a class="item1" v-text="item.title"></a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      foot:false,
      tager:[
        {id:0,title:"首页",url:"contact"},
        {id:1,title:"分类",url:""},
        {id:2,title:"购物车",url:"cait"},
        {id:3,title:"我的优购",url:""}
      ],
      changRed:2
    }
  },
  methods:{
    mainNav(){
      this.foot = !this.foot
    },
    change(index){
      this.change = index
    }
  }
}
</script>
<style lang="scss" scoped>
  #tit{
    padding-top:0.8rem;
    font-size: 1.3rem;
  }
  header {
    line-height: 41px;
  }
  .sitebar a {
    padding-top: 6px;
  }
  .main{
    font-size: 0.7rem;
  }
    .navmenu .item1 {
    background: url(../../../assets/homec.png) center 0.5rem no-repeat;
    background-size: 1.2rem auto;
  }
  .navmenu .bd a.item4 {
    background: url(../../../assets/class.png) center 0.5rem no-repeat;
    background-size: 1.2rem auto;
  }
  .navmenu .item2 {
    background: url(../../../assets/ico-shopcartc.png) center 0.5rem no-repeat;
    background-size: 1.2rem auto;
  }
  .navmenu .item3 {
    background: url(../../../assets/ico-personc.png) center 0.5rem no-repeat; 
    background-size: 1.2rem auto;
  }
  .itemfoucs {
    background: #555;
  }
</style>