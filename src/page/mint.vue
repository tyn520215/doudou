<template>
    <div class="App">
      <mt-header fixed >
        <router-link to="$router.go(-1)" slot="left">
          <mt-button icon="back" >返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <mt-spinner class="spinner" :type="1" color="black"></mt-spinner>
    </div>
</template>

<script>
  import {Header,Spinner} from 'mint-ui'
    export default {
        name: 'App',
        data () {
            show:''
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .spinner{margin-top: 50px; }
</style>
