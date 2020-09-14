import { NowRequest, NowResponse } from '@vercel/node'
import fetch from 'isomorphic-fetch'

export const faunaDbGraphQlEndpoint =
  'https://graphql.fauna.com/graphql'

export default async (req: NowRequest, res: NowResponse) => {
  let { queryName, queryMethod } = req.query

  const faunaResponse = await fetch(faunaDbGraphQlEndpoint, {
    method: queryMethod,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET_KEY}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: queryName,
      variables: {},
    }),
  })

  const { data } = await faunaResponse.json()

  res.json(data)
}
