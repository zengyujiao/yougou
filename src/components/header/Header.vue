<template>
  <div>
    <section class="ygIndexTop ygIndexTopFixed ygIndexTopNew">
      <header v-show="fool" @click="openOff" id="openApp_header">
        <img
          class="open_off"
          id="close"
          src="//i2.ygimg.cn/pics/mobile/appointment/indexNicon/close_ Down.png"
        />
        <div class="open_now">
          <div class="logoWrap">
            <img
              src="//i2.ygimg.cn/pics/mobile/appointment/indexNicon/logo_Down.png"
            />
          </div>
          <div class="siteName">
            <ul>
              <li>{{ title }}<br />{{ name }}</li>
            </ul>
          </div>
          <div class="downNow" onclick="openYGApp(null,switchAppDownload);">
            {{ nameNow }}
          </div>
        </div>
      </header>
      <form
        action="/search.sc"
        method="get"
        class="mallSearchform"
        name="mallSearchform"
        id="mallSearchform"
      >
        <input type="hidden" name="entry" value="search" />
        <div class="ygIndexTopM">
          <div class="logoW"></div>
          <a href="http://localhost:8080/search">
          <input id="ygIndexTopS"
            oninput="ygIndex.ygSearchKeyDown()"
            class="ygIndexTopS"
            name="kword"
            type="text"
            placeholder=""
            defaultlink=""
          />
          </a>
          <em class="iconOnly"></em>
          <em id="resetInput" class="cleanInput"></em>
          <input
            type="button"
            class="ygIndexTopSub"
            value=""
            style="display:none"
          />
          <div class="ygIndexInfo">
            <a
              onclick="javascript:_hmt.push(['_trackEvent', '首页点击消息统计', 'click', 'indexGoMessage']);"
              href="/messageList.sc"
              >消息</a
            >
          </div>
          <a
            onclick="javascript:_hmt.push(['_trackEvent', '首页点击消息统计', 'click', 'indexGoMessage']);"
            href="/messageList.sc"
          >
          </a>
        </div>
        <a
          onclick="javascript:_hmt.push(['_trackEvent', '首页点击消息统计', 'click', 'indexGoMessage']);"
          href="/messageList.sc"
        >
          <input type="hidden" value="" id="searchnode" name="node" />
          <input type="hidden" value="" id="keyword" name="keyword" />
        </a>
      </form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fool: true,
      title: "打开客户端",
      name: "领取新人专属礼包",
      nameNow: "立即打开"
    };
  },
  // 注册事件
  methods: {
    // 点击X隐藏
    openOff() {
      this.fool = !this.fool;
    }
  }
};
</script>
<style scoped></style>
