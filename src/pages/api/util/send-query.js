import fetch from 'isomorphic-fetch'

export const faunaDbGraphQlEndpoint =
  'https://graphql.fauna.com/graphql'

export default async (query, variables) => {
  const faunaResponse = await fetch(faunaDbGraphQlEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET_KEY}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const { data } = await faunaResponse.json()

  return data
}
