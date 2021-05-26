import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'

const Periodika = ({data}) => {

return(
    <div>
      <SEO
        title="Periodika"
        description="Periodika von Hasen oder Bein"
      />
    <Heading variant="titel">Blaetterbares</Heading>
    <Text>Grafische Betreuung von Periodika für Verlage, Universitäten & Co</Text>
    <Text variant="bildtext"><b>Über Gedrucktes macht man Inhalte wirklich (be)greifbar. </b> 
    Von Planung & Konzeption sowie Layout & Satz über Anzeigenverwaltung 
    und -gestaltung bis zur finalen Druckvorstufe ist 
    <b>hasen oder bein</b> erfahren und zuverlässig. 
    Selbstverständlich ist es möglich, die Inhalte auch auf die digitale Ebene &mdash;  
    z.B. als verlinktes und interaktives Blättermagazin &mdash;  
    zu übertragen oder parallel eine Webapplikation zu erstellen.
    
    </Text>   
    <Text variant="bildtext">Beispiel &rarr; <a href="http://soziologieblog.hypotheses.org/krisen" target="_blank" rel="noopener noreferrer">SOZIOLOGIEMAGAZIN &mdash; diverse Ausgaben</a>
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


export const PeriodikaQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_periodika/"}}) {
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
  
  export default Periodika