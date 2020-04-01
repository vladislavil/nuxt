<template>
  <div class="error">
    <h1 class="error-title">ERROR 404</h1>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<style lang="sass" scoped>

  .error
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    height: 100%
    flex-grow: 1
    flex-shrink: 0

  .error-title
    color: red
    font-size: 40px

</style>