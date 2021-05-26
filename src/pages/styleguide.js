import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'
const Styleguide = ({data}) => {

return(
    <>
    <SEO
        title="Styleguide"
        description="Beispiel für einen Styleguide"
      />
    <Heading>Blaetterbares</Heading>
    <Text>... für einen markanten Auftritt, egal in welchem Medium.</Text>
    <Text variant="bildtext"><b>Wenn mehrere oder häufig wechselnde Mitarbeiter Material für ein Unternehmen oder eine Institution erstellen, </b>bedarf es eines Styleguides, der Gestaltungsrichtlinien von Größe und Position des LOGOS, über HAUSFARBEN, SCHRIFTEN, bis hin zu RASTERN und GRAFIKEN vorgibt. Hier beispielsweise ein übersichtliches Manual im Format 150 x 155 mm, 32 Seiten, erstellt für die Beuth Hochschule Berlin.</Text>
       <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage alt="" image= {data.bilder.edges[2].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           
       <Box width={["100%","100%","49%"]}>
            <GatsbyImage alt="" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} /> 
       </Box>
      
     </Flex>   
    </>
)}


export const StyleQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/styleguide/"}}) {
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
  
  export default Styleguide