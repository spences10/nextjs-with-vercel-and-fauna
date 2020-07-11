import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
  const [date, setDate] = useState(null)
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date')
      const newDate = await res.text()
      setDate(newDate)
    }
    getDate()
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{date}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}
