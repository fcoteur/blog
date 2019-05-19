import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        title
        content {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title='About' />
      {documentToReactComponents(data.contentfulAbout.content.json)}
      </Layout>
  )
}
