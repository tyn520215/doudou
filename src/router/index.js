import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const film = r => require.ensure([], () => r(require('@/page/film')), 'film');
const book = r => require.ensure([], () => r(require('@/page/book')), 'book');
const music = r => require.ensure([], () => r(require('@/page/music')), 'music');
const filmDetail = r => require.ensure([], () => r(require('@/page/filmDetail')), 'filmDetail');
const seacher = r => require.ensure([], () => r(require('@/components/seacher')), 'seacher');
const mint = r => require.ensure([], () => r(require('@/page/mint')), 'mint');



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      children:[
        {
          path:'/film',
        component:film
        },
        {
          path:'/music',
        component:music
        },
        {
          path:'/book',
          component:book
        },

      ],
    },
    {
      path:'/filmDetail/:id',
      component:filmDetail
    },
    {
      path:'/seacher',
      component:seacher
    },
    {
      path:'/mint',
      component:mint
    }
  ]
})
