import { NowRequest, NowResponse } from '@vercel/node'
import fetch from 'isomorphic-fetch'

export const faunaDbGraphQlEndpoint =
  'https://graphql.fauna.com/graphql'

export const faunaGraphqlFetchMethodAndHeaders = {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
}

export default async (_req: NowRequest, res: NowResponse) => {
  const fetchAllLinks = `
    query{
      allLinks{
        data{
          name
          url
          description
          _id
          archived
        }
      }
    }`
  const faunaResponse = await fetch(faunaDbGraphQlEndpoint, {
    ...faunaGraphqlFetchMethodAndHeaders,
    body: JSON.stringify({
      query: fetchAllLinks,
      // variables: {
      //   customerId,
      // },
    }),
  })

  const { data } = await faunaResponse.json()

  res.json(data)
}
