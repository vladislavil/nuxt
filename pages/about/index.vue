<template>
  <div>
    <h1>
      This is about page
    </h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione cum distinctio eos necessitatibus, asperiores mollitia, cumque itaque sequi magni amet architecto quas. Consectetur quibusdam temporibus vitae voluptatibus ex ea quam.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem voluptate molestiae beatae id esse praesentium quisquam recusandae. Optio quod enim quae quos animi neque non dolore tenetur sit perferendis.</p>
  </div>
</template>

<script>
  export default {
    middleware: ['auth']
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;  
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>