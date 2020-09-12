<template>
  <div class="employers-apps">
    <div class="app-container">
      <div v-for="(app, index) in apps" :key="index" class="app-bkgd">
        <a :href="app.link">
          <div :class="app.employer">
            <img :src="getSrc(app.employer)" />
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
          appTitle: 'Syracuse University',
          employer: 'syracuse',
          text: 'cuse',
          link: 'https://github.com/nmmoffit-su'
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
