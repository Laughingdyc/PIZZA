import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import About from './components/about/About.vue'

//二级路由
import Contact from "./components/about/Contact.vue";
import History from "./components/about/History.vue";
import OrderingGuide from "./components/about/OrderingGuide.vue";
import Delivery from "./components/about/Delivery.vue";

//三级路由
import Phone from "./components/about/contact/Phone.vue";
import PersonName from "./components/about/contact/PersonName.vue";

export const routes = [
    // {path: '/', name: 'homeLink', component: Home},
    {path: '/', name: 'homeLink', components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
    }},
    {path: '/menu', name: 'menuLink', component: Menu},
    {path: '/admin', name: 'adminLink', component: Admin},
    {path: '/login', name: 'loginLink', component: Login},
    {path: '/register', name: 'registerLink', component: Register},
    {path: '/about', name: 'aboutLink', component: About, redirect: '/about/contact', children: [
      {path: '/about/contact', name: 'contactLink', component: Contact, redirect: '/phone', children: [
        {path: '/phone', name: 'phoneNumber', component: Phone},
        {path: '/personname', name: 'personName', component: PersonName}
      ]},
      {path: '/history', name: 'historyLink', component: History},
      {path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide},
      {path: '/delivery', name: 'deliveryLink', component: Delivery}
    ]},
    {path: '*', redirect: '/'}
  ]