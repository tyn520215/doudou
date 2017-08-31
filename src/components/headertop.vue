<template>
    <div class="headerTop">
      <i class="head_goback" v-if="goBack" @click="$router.go(-1)"></i>
      <span>{{headTitle}}</span>
      <router-link to="/seacher">
        <i class="seacher"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          secharvlaue:'',
        }
      },
      props: ['headTitle','goBack'],
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../css/common.scss";
  .headerTop{position: fixed;top:0;width: 100%;height: 50px;line-height: 50px;background-color:white;border-bottom: 1px solid #e3e3e3;color: black;text-align: center}
  h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

  .head_goback{
   background: url("../image/goback.png") no-repeat;
    width: 30px;
    height: 30px;
    background-size: 30px 30px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 10px;
  }

  .seacher{
    background: url("../image/seacher.png") no-repeat;
    width: 30px;
    height: 30px;
    background-size: 25px 25px;
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 10px;
  }


</style>
