<template>
  <div>
    <h2>This is About page</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos velit ipsam, eveniet
      eum odio quam dicta cupiditate architecto quaerat sint veritatis incidunt minima laboriosam nulla
      illum in sequi? Minus?
    </p>
    {{ data }}
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/tes?name=faiz', {
    method: 'post',
    body: {
      age: 23
    }
  })
</script>

<style scoped>

</style>