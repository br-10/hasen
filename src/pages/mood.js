import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'

const Mood = ({data}) => {

           
return(
    <div>
      <SEO
        title="How to to"
        description="Form follows function"
      />
    <Heading>Blaetterbares</Heading>
    <Text>In the mood...</Text>
    <Text variant="bildtext"><b>Ruhig oder aggressiv? Warm oder kalt?</b> Klar: Jede Farbe hat ihre eigene Aura und wirkt zusammen mit den sie umgebenden Farben. Über <b>moodboards </b>kann man sehr gut erforschen, welche Farben zu einer Idee oder einem Unternehmen passen und wie sie miteinander  harmonieren.</Text>
       <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage alt="" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           
       <Box width={["100%","100%","49%"]}>
            <GatsbyImage alt="" image= {data.bilder.edges[2].node.childImageSharp.gatsbyImageData} /> 
       </Box>
      
     </Flex>   
    </div>
)}


export const MoodQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_farben/"}}) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
 }
 

`
  
  export default Mood