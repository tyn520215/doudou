<template>
    <div class="seacher">
      <div class="seacherTop">
        <mt-search  v-model="secharvlaue"
                    placeholder="请输入想要搜索的电影或人物"
                    @input="query">
          <mt-cell
            v-for="item in result"
            :title="item.title"
            :value="item.value"
            :to="'/filmDetail/'+item.id">
            <img slot="icon" :src="item.images.small" width="65" height="100">
          </mt-cell>
        </mt-search>
      </div>
      <div class="historyBody" v-if="history.length">
        <div class="historyBodyTop">搜索历史<span @click="deleteAll">清除</span></div>
        <div>
          <ul>
            <li class="historyLi" v-for="item in history" @click="gain(item)">
              {{item}}
            </li>
          </ul>
        </div>
      </div>
      <load-Ing v-if="show"></load-Ing>
      <erro-Show v-if="erro"></erro-Show>
    </div>
</template>

<script>
  import erroShow from '../components/erroShow.vue'
  import loadIng from '../components/loading.vue'
  import { Cell,Search  } from 'mint-ui';
  import {getLoaclStrong,setLoaclStrong} from '../utils/utils'
    export default {
        name: 'App',
        data () {
            return{
              film: [],//查询结果
              title:'',
              secharvlaue:'',//搜索输入
              erro:false,
              history:[],
              actor:[],
              show:false,
              result:''
            }
        },
      mounted(){
        if(getLoaclStrong('history')){
         this.history = JSON.parse(getLoaclStrong('history'));
        }
      },
      computed: {
        filterResult() {
          return this.film.subjects;
        }
      },
      methods:{
        query(){
          this.show = true;//开启loading动画
          //如果存在就不添加到localstrong
          if(getLoaclStrong('history')){
            if(getLoaclStrong('history').indexOf(this.secharvlaue) == -1){
              this.history.push(this.secharvlaue);
              setLoaclStrong('history',this.history);
            }
          }else{
            this.history.push(this.secharvlaue);
            setLoaclStrong('history',this.history);
          }
          this.$http.jsonp('https://api.douban.com/v2/movie/search?q='+this.secharvlaue).then(res=>{
                if(res.status == 200){
                  this.show =false;
                  let response = res.body;
                  this.film = response;
                  this.result = response.subjects;
                  this.title = response.title;
//                  for(let i = 0 ;i < response.subjects.length;i++){
//                    let actorArr = '';
//                      for(let a = 0; a < ((response.subjects)[i].casts).length;a++){
//                           actorArr+=(response.subjects[i].casts)[a].name+'/';
//                      }
//                    this.actor.push(actorArr)
//                  }
                }
            }).catch(function(){
            this.erro = true
          })
        },
        deleteAll(){
         window.localStorage.clear();
         this.history=[];
        },
        gain(item){
            this.secharvlaue = item;
            this.query();
        }
      },
      components:{
        erroShow,
        loadIng
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    .seacher{font-size: 0.14rem}
    .seacherFont{float: left;padding: 43px 10px 0;}
    .seacherFont span{display: block;font-size: 14px;color:#a9acb1;}
    .filmSeacherLogo{float: left}
    ul {
        list-style-type: none;
        padding: 0;
    }
    .historyBody{margin-top:50px;width:100%;height: 50px;line-height: 50px;background-color:#dbdbdb;padding-left: 10px; }
    .historyLi{    width: 50%;
      text-align: center;
      display: inline-block;
      border-left: 0.5px solid #e3e3e3;
      }
  .filmsall{text-decoration: none;color:black; width: 100%;border-right:1px solid #acacac;}
    .historyBody ul{margin: 0}
    .film-top{color:#8d8b8b;margin: 0}
    .seacherTop{width: 100%;
      background-color: #e3e3e3;
      position: fixed;
      top: 0;
      left: 0;}
    .seacherText{
      width: 80%;
      padding: 5px;
    }
    .total{display: block;width: 100%;height: 40px;line-height: 40px;color:black;border-bottom: 1px solid #acacac}
    .seacherBody{
      margin-top: 60px;
    }
    a {
        color: #42b983;
    }
</style>
