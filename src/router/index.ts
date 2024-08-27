import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import AboutMeText from '@/views/AboutMeText.vue'
// @ts-ignore
import BlogView from '@/views/BlogView.vue'
// @ts-ignore
import ProjectView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/about', component: AboutMeText },
    { path: '/blogs', component: BlogView },
    { path: '/projects', component: ProjectView }
  ]
})

export default router
