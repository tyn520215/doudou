<template>
    <div class="film" >
      <head-Top :head-title="title">
      </head-Top>
        <div v-for="films in film" :key="films.id" class="filmsall">
        <router-link class="routerDeful" :to="'/filmDetail/'+films.id">
          <div class="film-top">{{films.title.length > 7 ? films.title.substring(0,5)+'...': films.title}}</div>
          <div class="film-comtent">
            <a :href="films.alt"><img :src="films.images.medium"/></a>
          </div>
        </router-link>
      </div>
      <erro-Show v-if="erro"></erro-Show>
      <load-Ing v-if="show"></load-Ing>
    </div>
</template>

<script>
  import headTop from '../components/headertop.vue';
  import loadIng from '../components/loading.vue'
  import erroShow from '../components/erroShow.vue';
  export default {
      data(){
        return{
          title:'',
          film: '',
          erro:false,
          show:true
        }
      },
      created(){
        this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(res=>{
            if(res.status ==  200 ){
              this.show = false;
              this.film = res.body.subjects;
              this.title =res.body.title
            }else{
              this.title = '电影';
              this.erro = true;
            }
        })
      },
      components:{
        headTop,
        loadIng,
        erroShow
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .film{margin: 60px auto;}
  .routerDeful{text-decoration: none;color:black;}
  .filmsall{border: 1px solid #e3e3e3;margin: 10px 10px;width: 40%;border-radius: 5px;display: inline-block;margin-left: 0.18rem;}
  .film-top{padding: 10px;border-bottom: 1px solid #e3e3e3;text-align: center}
  .film-comtent{padding: 20px;}
  .dialog{text-align: center;margin: 150px 0;}
</style>
