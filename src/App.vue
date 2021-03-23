<template>
  <!-- <the-nav></the-nav> -->
  <the-header :gky="gky"></the-header>
  <base-box
    v-for="card in cards"
    :key="card.title"
    :label="card.label"
    :items="card.items"
  ></base-box>
  <the-footer></the-footer>
</template>

<script>
// import TheNav from "./layouts/TheNav.vue";
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  data () {
    return {
      gky: {
        name: 'Keyang Yu',
        avatarurl: require('./assets/gky.jpg'),
        title: 'Ph.D. Student in Computer Science',
        about: `I'm a second year Ph.D. Student at 
        <a href="http://users.cis.fiu.edu/~dochen/index.html">Dr. Dong Chen's</a> 
        <a href="https://cps.cis.fiu.edu/">Cyber-Physical Laboratory</a>, 
        Florida International University. My research area is data privacy and security related to Cyber-Physical Systems. Currently my projects are working on IoT network traffic and smart home user activity analyzing and privacy preserving.`,
        links: [
          { img: require('./assets/email.png'), url: 'kyu009@fiu.edu' },
          {
            img: require('./assets/github.png'),
            url: 'https://github.com/KeyangYu'
          },
          {
            img: require('./assets/linkedin.png'),
            url: 'https://www.linkedin.com/in/keyang-yu-438a12178/'
          }
        ]
      },
      cards: [
        {
          label: 'Education',
          items: [
            {
              title: '(In Progress) Ph.D., Computer Science',
              subtitle: 'Florida International University',
              content: '2018 — Present',
              link: {
                url: '',
                title: ''
              }
            },

            {
              title: 'Bachelor of Engineering, Information Technology',
              subtitle: 'Southeast University (China)',
              content: '2017',
              link: {
                url: '',
                title: ''
              }
            }
          ]
        },
        {
          label: 'Publications',
          items: [
            {
              title:
                "[IPSN'21] PrivacyGuard: Enhancing Smart Home User Privacy",
              subtitle: 'Keyang Yu, Qi Li, Dong Chen, Mohammad Ashiqur Rahman, Shiqiang Wang',
              content:
                "In Proceedings of the 20th ACM/IEEE International Conference on Information Processing in Sensor Networks, IPSN'21, May 18-21, 2021, Nashville, Tennessee, USA, Acceptance Rate = 24.76%.",
              link: {
                // url: 'http://ocelot.aul.fiu.edu/~kyu009/SmartAttack.pdf',
                // title: 'Paper'
              }
            },
            {
              title:
                '[BigDataCPS’20] SmartAttack: Open-source Attack Models for Enabling Security Research in Smart Homes.',
              subtitle: 'Keyang Yu, Dong Chen',
              content:
                'In Proceedings of the 2nd IEEE International Workshop on Big Data Analytics of Cyber-Physical Systems (BigDataCPS’20), Oct 19, 2020, co-located with IGSC’20.',
              link: {
                url: 'http://ocelot.aul.fiu.edu/~kyu009/SmartAttack.pdf',
                title: 'Paper'
              }
            },

            {
              title:
                '[IGSC’20] SolarDiagnostics: Automatic Rooftop Solar Photovoltaic Array Damage Detection.',
              subtitle: 'Qi Li, Keyang Yu, Dong Chen',
              content:
                'In Proceedings of the Eleventh IEEE International Green and Sustainable Computing Conference, IGSC’20, Oct 19-22, Acceptance Rate = 23%.',
              link: {
                url: 'http://ocelot.aul.fiu.edu/~kyu009/SolarDiagnostics.pdf',
                title: 'Paper'
              }
            }
          ]
        },
        {
          label: 'Links',
          items: [
            {
              title: '',
              subtitle: '',
              content: '',
              link: {
                url: 'https://www.youtube.com/channel/UCWeM_0s_km6ebefXrio6UGQ',
                title: 'CPS Lab Youtube Channel'
              }
            },

            {
              title: '',
              subtitle: '',
              content: '',
              link: {
                url: 'https://cps.cis.fiu.edu/',
                title: 'Cyber-Physical Systems Laboratory (CPSLab)'
              }
            },
            {
              title: '',
              subtitle: '',
              content: '',
              link: {
                url: 'https://www.cis.fiu.edu/',
                title: 'FIU SCIS'
              }
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
