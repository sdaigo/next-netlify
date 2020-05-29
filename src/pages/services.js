import * as React from 'react'
import Head from 'next/head'

import services from '../../content/services.yml'

export default ({ services }) => {
  console.log(services)
  return <article></article>
}

export async function getStaticProps() {
  return {
    props: {
      services,
    },
  }
}
