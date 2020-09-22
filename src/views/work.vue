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
          <div :class="job.employer">
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
              <li v-for="(bullets, index2) in job.description" :key="index2">{{ bullets.bullet }}</li>
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
            { bullet: 'Mentored students on lab days' },
            {
              bullet: 'Evaluated labs assignments before released to students'
            },
            {
              bullet:
                'Tutored students in office hours alone every week for one hour'
            }
          ]
        },
        {
          employerDisplay: 'SIDEARM Sports',
          employer: 'sidearm',
          text: 'sidearmsports',
          link: 'https://www.sidearmsports.com',
          title: 'Data Curation & Production Assistant',
          hover: false,
          description: [
            { bullet: 'Trained with the Front-End Development Team' },
            {
              bullet: 'Worked within CMS to assist in the creation of websites'
            },
            {
              bullet: 'Delivered projects in a set timeframe'
            }
          ]
        },
        {
          employerDisplay: 'Cortland Athletics',
          employer: 'cortland',
          text: 'reddragons',
          link: 'https://www.cortlandreddragons.com',
          title:
            'I wrote the code for this website as part of my training at SIDEARM Sports',
          hover: false,
          description: [{ bullet: 'Click the app to check it out' }]
        }
      ],
      ItemIndex: null
    }
  },
  methods: {
    selectIndex(Index) {
      this.ItemIndex = Index
    },
    getSrc(employer) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + employer + '.png')
    }
  }
}
</script>