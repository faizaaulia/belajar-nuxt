<template>
  <div>
    <p>This is detail of product {{ id }}</p>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
</script>
<style scoped>

</style>