import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import HomeV2 from '@/pages/home-v2/home-v2'
// const AboutUs = () => import(/* webpackChunkName: "group" */ '@/pages/about-us/about-us')
import AboutUs from '@/pages/about-us/about-us'
// import Doctor from '@/pages/about-us/doctor/doctor'
// import Team from '@/pages/about-us/team/team'
// import Tech from '@/pages/about-us/tech/tech'
// import OfficeTour from '@/pages/about-us/office-tour/office-tour'
import Treatments from '@/pages/treatments/treatments'
import TSA from '@/pages/tsa/tsa'
import FAQ from '@/pages/faq/faq'
import Contact from '@/pages/contact/contact'
import Blog from '@/pages/blog/blog'
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
      component: HomeV2,
      mobile: true
    },
    {
      path: '/home-old',
      name: 'Home Old',
      navigation: false,
      component: Home,
      mobile: false
    },
    {
      path: '/about-us',
      name: 'About Us',
      navigation: true,
      thumbnail: '/static/AboutUsThumb.png',
      component: AboutUs,
      mobile: true,
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
        }
        // {
        //   path: '/about-us#team',
        //   name: 'Our Team',
        //   slug: 'our-team',
        //   meta: {
        //     parent: 'About Us',
        //     subnav: true,
        //     navigation: true
        //   }
        // },
        // {
        //   path: '/about-us#tech',
        //   name: 'Technology',
        //   slug: 'technology',
        //   meta: {
        //     parent: 'About Us',
        //     subnav: true,
        //     navigation: true
        //   }
        // },
        // {
        //   path: '/about-us#office',
        //   name: 'Office Tour',
        //   slug: 'office-tour',
        //   meta: {
        //     parent: 'About Us',
        //     subnav: true,
        //     navigation: true
        //   }
        // }
      ]
    },
    {
      path: '/treatments',
      name: 'Family and Cosmetic Dentistry',
      navigation: true,
      thumbnail: '/static/TreatmentThumb.png',
      component: Treatments,
      mobile: true,
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
        }
        // remember to add comma!
        // {
        //   path: '/treatments#tmj-jva',
        //   name: 'TMJ, Sleep Therapy & Airway Orthodontics',
        //   slug: 'tmj-jva',
        //   meta: {
        //     parent: 'Treatments',
        //     subnav: true,
        //     navigation: true
        //   }
        // },
        // {
        //   path: '/treatments#kids',
        //   name: 'Kids',
        //   slug: 'kids',
        //   meta: {
        //     parent: 'Treatments',
        //     subnav: true,
        //     navigation: true
        //   }
        // },
        // {
        //   path: '/treatments#airway-orthodontics',
        //   name: 'Airway Orthodontics',
        //   slug: 'airway-orthodontics',
        //   meta: {
        //     parent: 'Treatments',
        //     subnav: true,
        //     navigation: true
        //   }
        // },
        // {
        //   path: '/treatments#tech',
        //   name: 'Technology',
        //   slug: 'tech',
        //   meta: {
        //     parent: 'Treatments',
        //     subnav: true,
        //     navigation: true
        //   }
        // },
        // {
        //   path: '/treatments#sleep-therapy',
        //   name: 'Sleep Therapy',
        //   slug: 'sleep-therapy',
        //   meta: {
        //     parent: 'Treatments',
        //     subnav: true,
        //     navigation: true
        //   }
        // }
      ]
    },
    {
      // path: '/tmj-sleep-therapy-airway-orthodontics/#tmj-jva',
      path: '/tmj-sleep-therapy-airway-orthodontics',
      name: 'TMJ, Sleep Therapy & Airway Orthodontics',
      // slug: 'tmj-jva',
      navigation: true,
      thumbnail: '/static/TreatmentThumb.png',
      // component: Treatments,
      component: TSA,
      mobile: true,
      children: [
        {
          path: '/tmj-sleep-therapy-airway-orthodontics#tmj-jva',
          name: 'TMJ',
          slug: 'tmj-jva',
          meta: {
            parent: 'TSA',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/tmj-sleep-therapy-airway-orthodontics#sleep-therapy',
          name: 'Sleep Therapy',
          slug: 'sleep-therapy',
          meta: {
            parent: 'TSA',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/tmj-sleep-therapy-airway-orthodontics#airway-orthodontics',
          name: 'Airway Orthodontics',
          slug: 'airway-orthodontics',
          meta: {
            parent: 'TSA',
            subnav: true,
            navigation: true
          }
        },
        {
          path: '/tmj-sleep-therapy-airway-orthodontics#tech',
          name: 'Technology',
          slug: 'tech',
          meta: {
            parent: 'TSA',
            subnav: true,
            navigation: true
          }
        }
      ]
    },
    {
      path: '/faq',
      name: 'FAQs',
      navigation: true,
      thumbnail: '/static/FAQThumb.png',
      component: FAQ,
      mobile: true
    },
    {
      path: '/contact',
      name: 'Contact',
      navigation: true,
      thumbnail: '/static/ContactThumb.png',
      component: Contact,
      mobile: true
    },
    {
      path: '/:postId',
      name: 'Blog',
      component: Blog
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
