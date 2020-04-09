<template>
  <div>
    <h1>Аналитика по постам</h1>
    <app-analytics
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    >
    </app-analytics>
    <app-analytics
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    >
    </app-analytics>
  </div>
</template>

<script>

  import AppAnalytics from "@/components/admin/AnalyticsChart"

  export default {
    components: {
      AppAnalytics
    },
    head() {
      return {
        title: `Аналитика | ${process.env.appName}`
      }
    },
    layout: "admin",
    middleware: 'admin-auth',
    async asyncData({store}) {
      const {views, comments} = await store.dispatch('post/getAnalytics');
      return {views, comments};
    },
  }

</script>

<style lang="sass" scoped>

</style>
