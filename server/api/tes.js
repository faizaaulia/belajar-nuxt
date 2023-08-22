export default defineEventHandler(async (event) => {

  // handle query params
  const { name } = getQuery(event)

  // handle post body req
  const { age } = await readBody(event)

  return {
    message: `halo, I'm ${name} ${age} years old`
  }
})