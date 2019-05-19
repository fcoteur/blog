import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContact {
        title
        content {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title='Contact' />
      {documentToReactComponents(data.contentfulContact.content.json)}
      </Layout>
  )
}

export default ContactPage
