export default defineEventHandler((event) => {

  // handle query params
  const { name } = getQuery(event)

  return {
    message: `halo, ${name}`
  }
})