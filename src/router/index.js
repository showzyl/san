import san from 'san'
import {router} from 'san-router'
// 引入组件
import App from '../App.san'

const routeArr = [
  {
    rule: '/',
    Component: App,
    target: '#app'
  },
  {
    rule: '/aa',
    Component: san.defineComponent({
      template: '<div>我是 aaaaa<div>',
    }),
    target: '#app'
  }
]

routeArr.forEach(item => {
  router.add(item)
})

export {
  router
}
