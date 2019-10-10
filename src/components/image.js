import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({uri}) => {
  const data = useStaticQuery(graphql`
    query {
        allImageSharp {
          nodes {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
  `)
  const filterNodes = data.allImageSharp.nodes.filter(n => n.fluid.originalName === uri);
  if (filterNodes.length === 0) {
    throw new Error('请检查传入的图片名是否正确！');
  }
  return <Img fluid={filterNodes[0].fluid} />
}

export default Image
