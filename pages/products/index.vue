<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in products">
      <!-- binding product ke komponen ProductCard,
      karena pada ProductCard telah terdefinisi props product -->
      <ProductCard :product="product"/>
    </div>
  </div>
</template>

<script setup>
  // secara default, layout akan menggunakan template dengan filename default.vue pada direktori layouts
  // fungsi ini bertujuan untuk menggunakan template selain default
  definePageMeta({
    layout: 'products'
  })

  // fetch data menggunakan composable useFetch()
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

   // override head object di nuxt.config menggunakan composable useHead()
   useHead({
    title: "Belajar Nuxt JS | Products",
    meta: [
      { name: "description", content: "Belajar Nuxt JS | Products" }
    ],
  })
</script>

<style scoped>

</style>