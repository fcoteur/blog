import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


export default function AboutPage() {
  return (
    <Layout>
      <Head title='About' />
      <h1>About Page</h1>
      <p>these are my contact details</p>
      <p>need a dev? <Link to='/contact'>contact me</Link></p>
      </Layout>
  )
}
