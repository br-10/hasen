import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'

const Studiofoto = ({data}) => {

return(


    <div>
      <SEO
        title="Studio- und Produktfotografien"
        description="Beispielarbeiten Studio - und Produktfotografie"
      />
    <Heading># freie arbeiten</Heading>
    <Text>Studio- und Produktfotografie</Text>
    <Text variant="bildtext"><b>Mit Hohlkehle und Blitz </b> rückt <b>hasen oder bein </b>gelegentlich den Dingen auf den Leib oder versucht das bezaubernde Lächeln eines kleinen Mädchens einzufangen.
    
    </Text>   
    <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage alt="" image= {data.bilder.edges[0].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           
       <Box width={["100%","100%","49%"]}>
            <GatsbyImage alt="" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} /> 
       </Box>
      
     </Flex>   
    </div>
)}


export const StudioQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_studiofoto/"}}) {
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
  
  export default Studiofoto