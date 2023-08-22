export default defineEventHandler(async (event) => {
  const params = event.context.params
  const data = await $fetch(`https://fakestoreapi.com/products/${params?.id}`)
  return data
})