import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'

const Jahresbuch = ({data}) => {

return(
    <div>
      <SEO
        title="Freie Arbeit Jahresbücher"
        description="Beispiele der Gestaltung von Jahresbüchern"
      />
    <Heading># Freie Arbeiten</Heading>
    <Text>Jahresbücher von hasen oder bein.</Text>
    <Text variant="bildtext">Seit vier Jahren produziert  <b>hasen oder bein fotografische Jahresbücher, </b> jede Woche erhält eine Seite bzw. ein Bild. Für Ende dieses Jahres (2016) ist der erste 5-Jahres-Schuber geplant. Grundlage sind fotografische Beobachtungen des Alltags mit kurzen Kommentaren. Eine subjektive, manchmal auch "zeitgeistige" Verortung. </Text>   
    <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage alt="Bild Jahresbuch" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           
       <Box alt="Bild Jahresbuch" width={["100%","100%","49%"]}>
            <GatsbyImage alt="Jahresbuch" image= {data.bilder.edges[0].node.childImageSharp.gatsbyImageData} /> 
       </Box>
      
     </Flex>   
    </div>
)}


export const jahresQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_jahrbuch/"}}) {
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
  
  export default Jahresbuch