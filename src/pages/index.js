import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      contentfulHome {
        title
        content {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title='Home'/>
      {documentToReactComponents(data.contentfulHome.content.json)}
    </Layout>
  )
}
