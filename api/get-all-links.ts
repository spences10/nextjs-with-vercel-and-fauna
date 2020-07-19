import { NowRequest, NowResponse } from '@vercel/node'
import { READ_LINKS } from './util/queries'
import sendQuery from './util/send-query'

export default async (_req: NowRequest, res: NowResponse) => {
  const data = await sendQuery(READ_LINKS, {})

  res.json(data)
}
