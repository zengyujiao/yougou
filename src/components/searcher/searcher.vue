<template>
  <div>
    <div class="TopFixed">
      <div @click="goback" class="TopSub"></div>
      <form class="form">
        <input v-model="searchText" class="TopS">
        <input class="TopU" id="TopShow">
      </form>
    </div>
  </div>
</template>
<script>
import observer from "../../tool/observer"
export default {
  data(){
    return {
      searchText:""
    }
  },
  methods:{
    goback(){
      this.$router.back()
    },
  },
  // watch:{
  //   searchText(){
  //     observer.emit("setSeatchText",this.searchText)
  //   }
  // }
}
</script>
<style lang="scss" scoped>
  .TopFixed{
    height:3rem;
    width:100%;
    border-bottom:.013333rem solid #ccc;
    display: flex;
    flex: none;
  }
  .TopSub{
    height:3rem;
    width:3rem;
    background: url(../../assets/ico-close.png) center center no-repeat;
    background-size: 1rem auto;
  }
  .form{
    display:flex;
    flex: none;
  }
  .TopS{
    height:2rem;
    width:17rem;
    border:none;
    margin-top:0.433333rem;
    border:1px solid #ccc;
  }
  .TopU{
    height:2rem;
    width:3rem;
    background:#f1f1f1 url(../../assets/ico-srch.png) center center no-repeat;
    background-size: 1.3rem auto;
    border:none;
    border:1px solid #ccc;
    border-left:none;
    margin-top:0.433333rem
  }
</style>