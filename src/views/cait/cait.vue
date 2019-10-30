<template>
  <div id="box">
    <Toubu>购物车</Toubu>
    <Gouwuche/>
  </div>
</template>

<script>
import Toubu from "@/components/find/toubu/toubu.vue";
import Gouwuche from "@/components/gouwuche/gouwuche.vue";

export default {
  components: {
    Toubu,
    Gouwuche
  }
};
</script>