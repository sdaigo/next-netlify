import * as React from 'react'
import toml from 'toml'

import Clients from '../../content/clients.toml'

export default ({ clients }) => {
  return (
    <article>
      <h2>clients</h2>
      <ul>
        {clients.map(cl => (
          <li key={cl.slug}>{cl.name}</li>
        ))}
      </ul>
    </article>
  )
}

export async function getStaticProps() {
  const clients = toml.parse(Clients)
  return {
    props: {
      clients: clients.items,
    },
  }
}
