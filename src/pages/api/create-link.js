import { CREATE_LINK } from './util/queries'
import sendQuery from './util/send-query'

export default async (req, res) => {
  const { name, url, description } = JSON.parse(req.body)
  const variables = { name, url, description, archived: false }
  const data = await sendQuery(CREATE_LINK, variables)

  res.json(data)
}
