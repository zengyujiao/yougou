<template>
    <div id="weui">
        <div class="weui-tabbar taber">
                <a v-for="(item,index) in tagger" @click="heightLheight(index)" :key="index" href="javascript:;" :class="[
                    'weui-tabbar__item', {'weui-bar__item_on':offset === index}]">
                    <span style="display: inline-block;position: relative;">
                        <img :src="item.imgUrl" alt="" class="weui-tabbar__icon">
                        <span v-if="item.dot" class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;" ></span>
                    </span>
                    <p id="title" v-text="item.title" class="weui-tabbar__label"></p>
                </a>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tagger:[
                {title:"首页",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_home_selected.png"},
                {title:"分类",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_categories_normal.png"},
                {title:"发现",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_discover_normal.png"},
                {title:"购物车",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_shopcar_normal.png"},
                {title:"我的",imgUrl:"http://m.yougou.com/images/indexNew/toolbar_personal_normal.png"}
            ],
            offset:0
        }
    },
     methods: {
        heightLheight(index) {
            this.offset = index
            // 传递值选项卡的索引值给min.js
            // observer.emit("setTabber", index)
            
        }
    }
}
</script>
<style scoped>
    .taber{
        position: fixed;
        width:100%;
        bottom:0px;
    }
    /* #title{
        color:#333;
        color:#FF4664;
    } */
    #labe{
        color:#FF4664;
    }
</style>