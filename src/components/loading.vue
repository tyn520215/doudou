<template>
  <div class="loadingWrap" id="load" >
    <mt-spinner class="spinner" :type="3" color="black" :size="30"></mt-spinner>
  </div>
</template>

<script>
  import {Header,Spinner} from 'mint-ui'
    export default {
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loadingWrap .spinner {
      width: 100%;
      height: 100%;
      position: fixed;
      _position: absolute;
      top: 50%;
      left: 50%;
      z-index: 100000;
      _height: expression(document.body.offsetHeight+"px");
      /*position: relative;*/
    }

</style>
