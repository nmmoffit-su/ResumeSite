<template>
  <div class="employers-apps">
    <div class="app-container">
      <div v-for="(app, index) in apps" :key="index" class="app-bkgd">
        <a :href="app.link">
          <div :class="app.class">
            <i :class="app.icon"></i>
          </div>
        </a>
      </div>
    </div>
    <div class="employer-container">
      <div v-for="(app, index) in apps" :key="index" class="employer">{{ app.appTitle }}</div>
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
          icon: 'fas fa-phone'
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