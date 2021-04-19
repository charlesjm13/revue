import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home'

// GUIDE: This file defines urls for the frontend
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '@/views/SignUp')
  },
  {
    path: '/s/:name',
    name: 'Subvue',
    component: () => import(/* webpackChunkName: "subvue" */ '@/views/Subvue')
  },
  {
    path: '/s/:subvuePermalink/:id',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '@/views/Post')
  },
  {
    path: '/u/:username',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User')
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: () => import(/* webpackChunkName: "create" */ '@/views/CreatePost')
  },
  {
    path: '/create/subvue',
    name: 'CreateSubvue',
    component: () => import(/* webpackChunkName: "createsubvue" */ '@/views/CreateSubvue')
  },
  {
    path: '/ratings/courses',
    name: 'CourseRatings',
    component: () => import(/* webpackChunkName: "courseratings" */ '@/views/CourseRatings')
  },
  {
    path: '/ratings/colleges',
    name: 'CollegeRatings',
    component: () => import(/* webpackChunkName: "collegeratings" */ '@/views/CollegeRatings')
  },
  {
    path: '/:username/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "usersettings" */ '@/views/Settings')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
