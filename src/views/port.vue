<template>
  <div class="port-apps apps">
    <div class="app-container">
      <div v-for="(app, index) in apps" :key="index" class="app-bkgd">
        <a :href="app.link">
          <div :class="app.employer">
            <i :class="app.icon"></i>
          </div>
        </a>
        <div class="employer">{{ app.appTitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      apps: [
        {
          appTitle: 'Github',
          employer: 'github',
          text: 'github',
          link: 'https://github.com/nmmoffit-su',
          icon: 'fab fa-github'
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
