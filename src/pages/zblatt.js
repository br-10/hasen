import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'

const ZBlatt = ({data}) => {

return(
    <div>
      <SEO
        title="Blätterbares. Businessplan, Broschüren, Kataloge"
        description="Arbeiten Businessplan, Infobroschüren, Ausstellungskataloge"
      />
    <Heading>Blaetterbares</Heading>
    <Text>Wir bringen Ihre Inhalte in die richtige Form.</Text>
    <Text variant="bildtext"><b>Ob Businessplan, Informationsbroschüre oder Ausstellungskatalog, hasen oder bein </b>entwirft und realisiert für Sie 	— unter Berücksichtigung des existierenden Corporate Designs (so vorhanden) 	— ein überzeugendes Printprodukt. </Text>
       <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage  alt="" image= {data.bilder.edges[0].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           <Box width={["100%","100%","49%"]}>
            <GatsbyImage alt="" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} /> 
       </Box>
       
      
     </Flex>   
    </div>
)}


export const SommerQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_broschueren/"}}) {
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
  
  export default ZBlatt