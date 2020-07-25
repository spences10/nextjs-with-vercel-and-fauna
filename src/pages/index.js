import React from 'react'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'
import Layout from '../components/layout'
import LinkForm from '../components/link-form'

export default () => {
  const fetchData = async () => {
    // let name = `Linky Link`
    // let url = `https://sasaljjdfks.com`
    // let description = `Linky Link Description`
    // const body = { name, url, description }
    // const response = await fetch(`/api/create-link`, {
    //   method: `POST`,
    //   body: JSON.stringify(body),
    // })
    // const response = await fetch(`/api/get-all-links`)
    // const response = await fetch(
    //   `/api/get-links?queryName=${READ_LINKS}&queryMethod=POST`
    // )

    const response = await fetch(`/api/get-all-links`)
    const data = await response.json()
    return data
  }

  const { status, data, error } = useQuery('latest', fetchData)
  if (status === 'loading')
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    )
  if (status === 'error')
    return (
      <Layout>
        <div>Error! {JSON.stringify(error)}</div>
      </Layout>
    )

  const { data: linksData } = data.allLinks
  return (
    <Layout>
      <ReactQueryDevtools initialIsOpen={false} />
      <h1>Hello</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <LinkForm />
      <ol>
        {linksData.map(l => {
          return (
            <li key={l._id}>
              <p>{l.name}</p>
              <p>{l.url}</p>
              <p>{l.description}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
