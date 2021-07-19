<template>
  <div class="employers-apps apps">
    <div class="app-container">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        @mouseover="selectIndex(index)"
        @mouseout="ItemIndex = null"
        class="app-bkgd"
      >
        <a :href="job.link">
          <div class="app-item" :class="job.employer">
            <img :src="getSrc(job.employer)" />
          </div>
        </a>
        <div class="employer">{{ job.employerDisplay }}</div>
      </div>
    </div>
    <div class="text-container">
      <transition-group name="slide-fade">
        <div
          class="text"
          :class="job.text"
          v-for="(job, index) in jobs"
          v-show="ItemIndex === index"
          :key="index"
        >
          <div class="job-title">{{ job.title }}</div>
          <div class="job-description">
            <ul>
              <li v-for="(bullets, index2) in job.description" :key="index2">
                {{ bullets.bullet }}
              </li>
            </ul>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        {
          employerDisplay: 'Syracuse University',
          employer: 'syracuse',
          text: 'cuse',
          link: 'https://www.syracuse.edu',
          title: 'Advanced Web Design Teaching Assistant',
          hover: false,
          description: [
            { bullet: 'Mentored over 20 students during Lab days' },
            {
              bullet:
                'Evaluated labs assignments created by the professor before being released to students',
            },
            {
              bullet:
                'Tutored students during office hours without the instructor every week for 1 hour',
            },
          ],
        },
        {
          employerDisplay: 'SIDEARM Sports',
          employer: 'sidearm',
          text: 'sidearmsports',
          link: 'https://www.sidearmsports.com',
          title: 'Data Curation & Production Assistant',
          hover: false,
          description: [
            {
              bullet:
                'Received training from 2 people on the Front-End Development team',
            },
            {
              bullet:
                'Accepted legacy data from clients and reformatted for company platform utilizing proprietary Content Management System',
            },
            {
              bullet:
                'Consistently delivered projects on time according to company schedule',
            },
          ],
        },
        {
          employerDisplay: 'Cortland Athletics',
          employer: 'cortland',
          text: 'reddragons',
          link: 'https://www.cortlandreddragons.com',
          title:
            'I wrote the code for the Cortland University Athletics website as part of my training at SIDEARM Sports',
          hover: false,
          description: [{ bullet: 'Click the Cortland app to check it out' }],
        },
        {
          employerDisplay: 'Wallace Burgess',
          employer: 'wallace',
          text: 'burgess',
          link: 'https://www.wallaceburgess.com',
          title:
            "I designed and built this website using Vue.js to host a friend's writing examples",
          hover: false,
          description: [{ bullet: 'Click the WB app to check it out' }],
        },
      ],
      ItemIndex: null,
    }
  },
  methods: {
    selectIndex(Index) {
      this.ItemIndex = Index
    },
    getSrc(employer) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + employer + '.png')
    },
  },
}
</script>