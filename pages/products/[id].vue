<template>
  <div>
    <Head>
      <Title>Belajar Nuxt JS | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
      <Link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
          <img :src="product.image" alt="product image" class="mx-auto my-7"/>
        </div>
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product.title }}</h2>
          <p class="text-xl my-7">Price - ${{ product.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Description:</h3>
          <p class="mb-7">{{ product.description }}</p>
          <button class="btn-primary flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  const { id } = useRoute().params

  const { data: product } = await useFetch(`/api/products/${id}`)

  if (!product.value) {
    throw createError({ statusCode: 404, message: 'Product not found', fatal: true })
  }
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>