<template>
    <div class="App">
      <head-Top head-Title="书籍">

      </head-Top>
    </div>
</template>

<script>
  import headTop from '../components/headertop.vue'
    export default {
      components:{
        headTop
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .App{ margin: 60px auto;}
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
</style>
