<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumbnail" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn-primary my-4">View Detail</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  // mendefinisikan props yang dimiliki oleh komponen
  const { product } = defineProps(['product'])
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    margin: 0 auto;
  }
</style>