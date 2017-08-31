<template>
    <div class="filmDetail">
      <head-Top :head-title="title" goBack="true">
      </head-Top>
      <div class="detailBody" v-if="!show">
        <div class="detailImgLogo">
          <img :src="filmLogo" class="filmLogo" />
        </div>
        <div class="filmData">
          <div>
            <h3>{{title}}</h3>
            <span class="bload">{{year}}/{{genres}}</span></br>
            <span class="bload">片长90分钟</span>
          </div>
          <div class="rating">
              <span class="bload">豆瓣评分</span>
              <span class="ratingscord">{{average}}</span>
              <span class="bload">{{wish_count}}想看</span>
          </div>
        </div>
        <div class="introduction">
          <span>简介</span>
          <P>{{summary}}</P>
        </div>
        <div class="moviePersom ">
          <span>影人</span>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="actorItem in actor" :key="actorItem.id">
                <figure>
                  <img :src="actorItem.avatars.medium">
                  <figcaption>{{actorItem.name}}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    <load-Ing v-if="show"></load-Ing>
      <erro-Show v-if="erro"></erro-Show>
    </div>
</template>

<script>
  import headTop from '../components/headertop.vue';
  import loadIng from '../components/loading.vue'
  import erroShow from '../components/erroShow.vue';

  import '../plugins/swiper-3.4.2.min'
  import '../css/swiper-3.4.2.min.css'
    export default {
        data () {
            return{
              title:'',//电影标题
              Detail:'',
              year:'',//年份
              genres:'',//
              summary:'',//电影介绍
              filmLogo:'',//电影图片
              actor:'',//演员
              average:'',//评分
              show:true,
              wish_count:'',//多少人想看
              erro:false
            }
        },
      components:{
        headTop,
        loadIng,
        erroShow
      },
      created(){
            let id=this.$route.params.id;
            this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+id).then(respon =>{
              if(respon.status == 200){
                  this.show = false;
                  let res= respon.body;
                  this.title =res.title;
                  this.year = res.year;
                  this.summary = res.summary;
                  this.filmLogo = res.images.large;
                  this.average = res.rating.average;
                  this.wish_count = res.wish_count;
                  for(let i =0;i<res.genres.length;i++){
                    this.genres+=res.genres[i]+'/';
                  }
                  this.actor = res.casts;
                //初始化swiper
                let myswoper =new Swiper('.swiper-container', {
                  slidesPerView : 2,
                  centeredSlides : false,
                  observer:true,//修改swiper自己或子元素时，自动初始化swiper
                  observeParents:true,//修改swiper的父元素时，自动初始化swiper
                });
              }
            }).catch(function(){
              this.show = false;
              this.erro = true;
            })
      },
      methods:{

      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .filmDetail{margin: 51px auto}
   .filmData div{display: inline-block}
   .detailImgLogo{text-align: center;background-color: #2b2828;}
   .filmLogo{width: 50%;}
   .filmData{border-bottom: 1px solid #e3e3e3;padding: 15px;}
   .rating{width: 100px;height: 100px;border: 1px solid #e3e3e3;margin-top: 10px;float: right;margin-right: 30px;text-align: center;box-shadow: 0 0 20px 6px #e3e3e3;}
   .rating span{display: block;margin-top: 10px;}
   .filmData{
    h3{color: black;font-size: 20px;}
   .bload{color: #939393;font-size: 14px; }
   }
   .introduction,.moviePersom{padding: 10px;}
   .introduction span,.moviePersom span{color: #939393;font-size: 14px;}
   .swiper-container img{width:100px;margin-left: -20px; }
   .swiper-wrapper{transform: translate3d(0px, 0px, 0px)}
   .swiper-slide{width: 50%}
   .ratingscord{color:black;font-size: 18px;  }
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
