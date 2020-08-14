import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Form from '@/components/Form'
import Painting from "../components/Painting";
import EditPainting from "../components/EditPainting";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main,
      props: true
    }, {
      path:'/painting/:id',
      name: 'Id',
      component: Painting,
      props: true,
      children: [
        {
          path:'edit',
          name: 'Edit',
          component: EditPainting,
          props:true
        }
      ]
    },
    {
    path:'/form',
      name: 'Form',
      component: Form,
      props: true
    },
    {
    path: '*',
      redirect: "/"
    }
  ]
})
