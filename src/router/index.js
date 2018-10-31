import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import AboutUs from '@/pages/about-us/about-us'
// import Doctor from '@/pages/about-us/doctor/doctor'
// import Team from '@/pages/about-us/team/team'
// import Tech from '@/pages/about-us/tech/tech'
// import OfficeTour from '@/pages/about-us/office-tour/office-tour'
import Treatments from '@/pages/treatments/treatments'
import FAQ from '@/pages/faq/faq'
import Contact from '@/pages/contact/contact'
import PageNotFound from '@/pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'
import Styleguide from '@/styleguide/styleguide'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      component: Home
    },
    {
      path: '/about-us',
      name: 'About Us',
      navigation: true,
      thumbnail: '/static/AboutUsThumb.png',
      component: AboutUs,
      children: [
        {
          path: '/about-us#doctor',
          name: 'About the Doctor',
          slug: 'about-the-doctor',
          meta: {
            parent: 'About Us',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/about-us#team',
          name: 'Our Team',
          slug: 'our-team',
          meta: {
            parent: 'About Us',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/about-us#tech',
          name: 'Technology',
          slug: 'technology',
          meta: {
            parent: 'About Us',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/about-us#office',
          name: 'Office Tour',
          slug: 'office-tour',
          meta: {
            parent: 'About Us',
            subnav: true,
            navigation: true
          }
        }
      ]
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      thumbnail: '/static/TreatmentThumb.png',
      component: Treatments,
      children: [
        {
          path: '/treatments#cleaning-prevention',
          name: 'Cleaning & Prevention',
          slug: 'cleaning-prevention',
          meta: {
            parent: 'Treatments',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/treatments#cosmetic',
          name: 'Cosmetic Dentistry',
          slug: 'cosmetic-dentistry',
          meta: {
            parent: 'Treatments',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/treatments#restorations',
          name: 'Restorations',
          slug: 'restorations',
          meta: {
            parent: 'Treatments',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/treatments#kids',
          name: 'Kids',
          slug: 'kids',
          meta: {
            parent: 'Treatments',
            subnav: true
          }
        },
        {
          path: '/treatments#airway-oriented-orthodontics',
          name: 'Airway-Oriented Orthodontics',
          slug: 'airway-oriented-orthodontics',
          meta: {
            parent: 'Treatments',
            subnav: true
          }
        }
      ]
    },
    {
      path: '/faq',
      name: 'FAQs',
      navigation: true,
      thumbnail: '/static/FAQThumb.png',
      component: FAQ
    },
    {
      path: '/contact',
      name: 'Contact',
      navigation: true,
      thumbnail: '/static/ContactThumb.png',
      component: Contact
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    },
    {
      path: '/*',
      name: 'page-not-found',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

export default router
