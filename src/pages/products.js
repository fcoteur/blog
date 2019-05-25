import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"
import productStyles from "./products.module.scss"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProductItem(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            date(formatString: "MMMM Do, YYYY")
            picture {
              file {
                url
              }
            }
            description {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Products" />
      <div className={productStyles.products}>
        {data.allContentfulProductItem.edges.map(edge => {
          return (
            <div className={productStyles.product}>
              <img alt={edge.node.title} src={edge.node.picture.file.url} />
              <div>
                <h5>{edge.node.title}</h5>
                {documentToReactComponents(edge.node.description.json)}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
