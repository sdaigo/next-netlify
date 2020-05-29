import * as React from 'react'
import toml from 'toml'
import Markdown from 'react-markdown'

import Services from '../../content/services.toml'

export default ({ services }) => {
  return (
    <article>
      <h2>Services</h2>
      <div>
        {services.map(sr => (
          <div key={sr.heading}>
            <h3>{sr.heading}</h3>
            <Markdown source={sr.description} />
          </div>
        ))}
      </div>
    </article>
  )
}

export async function getStaticProps() {
  const services = toml.parse(Services)
  return {
    props: {
      services: services.items,
    },
  }
}
