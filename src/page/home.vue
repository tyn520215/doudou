<template>
    <div class="home">
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="film" @click.native="filmClick">
          <img class="tabicon" slot="icon" :src="film ? filmactive:filmdeful">
            movie
        </mt-tab-item>
        <mt-tab-item id="music" @click.native="filmClick">
          <img class="tabicon" slot="icon" :src="music ? musicactive:musicdeful">
          music
        </mt-tab-item>
        <mt-tab-item id="book" @click.native="filmClick">
          <img class="tabicon" slot="icon" :src="book ? bookactive:bookdeful">
          book
        </mt-tab-item>

      </mt-tabbar>


      <!--<nav class="nav">-->
          <!--<router-link class="nav-items nav-film" to="/film" @click.native="filmClick(1,2,2)" >-->
            <!--<figure>-->
              <!--<img :src="film ? filmactive:filmdeful"/>-->
              <!--<figcaption :class="film ? 'fontcolor':''">电影</figcaption>-->
            <!--</figure>-->
          <!--</router-link>-->
          <!--<router-link class="nav-items nav-music" to="/music" @click.native="filmClick(2,1,2)">-->
            <!--<figure>-->
              <!--<img :src="music ? musicactive:musicdeful"/>-->
              <!--<figcaption>音乐</figcaption>-->
            <!--</figure>-->
          <!--</router-link>-->
          <!--<router-link class="nav-items nav-book" to="/book"  @click.native="filmClick(2,2,1)">-->
            <!--<figure>-->
              <!--<img :src="book ? bookactive:bookdeful"/>-->
              <!--<figcaption>书籍</figcaption>-->
            <!--</figure>-->
          <!--</router-link>-->
      <!--</nav>-->
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';
    export default {
        data(){
            return{
              selected:'film',
              film:true,
              music:false,
              book:false,
              filmdeful:'./static/flimdeful.png',
              filmactive:'./static/filmactive.png',
              musicdeful:'./static/musicdeful.png',
              musicactive:'./static/musicactive.png',
              bookdeful:'./static/bookdeful.png',
              bookactive:'./static/bookactive.png',
            }
        },
      created(){
        this.$router.push('/film')
      },
      methods:{
        filmClick(){
          this.film = this.selected == 'film' ? true:false;
          this.music = this.selected == 'music' ? true: false;
          this.book = this.selected == 'book' ?true:  false;
          switch (this.selected){
            case 'film':
              this.$router.push('/film') ;
              break;
            case 'music':
              this.$router.push('/music') ;
              break;
            case 'book':
              this.$router.push('/book') ;
              break;
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../css/common.scss";
   *{margin: 0;padding: 0}
  .home{font-size: 0.14rem}
  .nav{position: fixed;bottom:0;width: 100%;height: 60px;line-height: 60px;background-color:white;border-top: 1px solid #e3e3e3;z-index: 999}
   .nav-items{display: block;width: 33%;text-decoration: none;float: right;color:#968d8d;text-align: center;padding-top: -30px; }
  figure img{width: 30px;}
  figure figcaption{margin-top: -45px;}
  .fontcolor{color:$font-color}
   a.router-link-active {
     color:$font-color
   }
  .app{font-size: 0.14rem}
   .nav .nav-film:after{
     display: block;
     width: 20px;
     height: 15px;
   }
  .tabicon{margin-top: 0.04rem;}
  .nav-icon{width: 30px;height: 30px;}
  .iocnwidth{width: 30%}
</style>
