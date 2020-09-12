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
          <div :class="app.class">
            <i :class="app.icon"></i>
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
          appTitle: 'LinkedIn',
          class: 'linkedin',
          link: 'https:www.linkedin.com/in/nicholas-moffitt/',
          icon: 'fab fa-linkedin-in'
        },
        {
          appTitle: 'Phone',
          class: 'phone',
          icon: 'fas fa-phone',
          title: 'Please e-mail me to recieve my phone number',
          text: 'phone-text'
        },
        {
          appTitle: 'E-Mail',
          class: 'mail',
          link: 'mailto:nickmoffitt23@gmail.com',
          icon: 'fas fa-envelope'
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