<template>
  <div>
    <h2>This is Products page</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos velit ipsam, eveniet
      eum odio quam dicta cupiditate architecto quaerat sint veritatis incidunt minima laboriosam nulla
      illum in sequi? Minus?
    </p>
  </div>
</template>

<script setup>
  // secara default, layout akan menggunakan template dengan filename default.vue pada direktori layouts
  // fungsi ini bertujuan untuk menggunakan template selain default
  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>