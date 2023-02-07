import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'
import {responsiveTitle1} from '../components/typography.module.css'

const ContactPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Contact' />
      <Container>
        <h1 className={responsiveTitle1}> Contact Info</h1>
        <p className="name">Evan Bonertz</p>
        <p className="email"> bonertz.unc@gmail.com</p>
        <p className="phone">919-593-7333</p>
        <p className="address"> Raleigh, NC </p>
        <div >
          <a href="https://twitter.com/eebdev" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/ebonertz/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/ebonertz" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/000000/github.png" alt="github" />
          </a>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
