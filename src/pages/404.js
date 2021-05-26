import * as React from "react"
import { Link } from "gatsby"
import {Box,Heading, Text} from '@chakra-ui/react'
import SEO from '../components/seo'
 

const NotFoundPage = () => {
  return (
  
    <Box>
        <SEO
    title="Not found"
    description="Hinweis bei nicht existierenden Webseiten"
  />
      
      <Heading>Page not found</Heading>
      <Text>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        </Text>
       
        <Link to="/">Go home</Link>.
     
    </Box>
  )
}

export default NotFoundPage
