<template>
  <div>
    <p>This is detail of product {{ id }}</p>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  const { id } = useRoute().params
</script>

<style scoped>

</style>