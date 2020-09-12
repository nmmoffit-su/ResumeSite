<template>
  <div class="employers-apps">
    <div class="app-container">
      <div
        v-for="(app, index) in apps"
        :key="index"
        @mouseover="selectIndex(index)"
        @mouseout="ItemIndex = null"
        class="app-bkgd"
      >
        <a :href="app.link">
          <div :class="app.employer">
            <img :src="getSrc(app.employer)" />
          </div>
        </a>
        <div class="employer">{{ app.appTitle }}</div>
      </div>
    </div>
    <div class="text-container">
      <transition-group name="slide-fade">
        <div
          class="text"
          :class="app.text"
          v-for="(app, index) in apps"
          v-show="ItemIndex === index"
          :key="index"
        >
          <div class="job-title">{{ app.title }}</div>
          <div class="job-description">
            <ul>
              <li v-for="(bullets, index2) in app.description" :key="index2">{{ bullets.bullet }}</li>
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
      apps: [
        {
          appTitle: 'Syracuse University',
          employer: 'syracuse',
          text: 'cuse',
          link: 'https://github.com/nmmoffit-su',
          hover: false,
          title: 'B.S. in Information Management & Technology',
          description: [
            {
              bullet: '2016-2020'
            },
            { bullet: 'Concentration in Web Design & Managment' },
            {
              bullet:
                'Graduated Magna Cum Laude (cumulative GPA of 3.6 or higher)'
            }
          ]
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
