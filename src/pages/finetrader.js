import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'
const Finetrader = ({data}) => {

console.log(data)
//console.log(data.bilder.edges[0].node.childImageSharp.gatsbyImageData.images.fallback)
//console.log(data.bilder.getImageData)
return(
    <div>
        <SEO
        title="b2b-Kommunikation"
        description="b2b-Kommunikation am Beispiel des Finetraders"
      />
    <Heading>Blaetterbares</Heading>
    <Text>... Corporate Identity durch b2b-Kommunikation</Text>
    <Text variant="bildtext"><b>Wenn Sie Ihren Kunden zeigen wollen, 
      dass Sie die beste Wahl sind </b>und nachhaltige 
      Aufmerksamkeit wünschen, dann lohnt es sich, über ein
       Kundenmagazin nachzudenken. Wertvolles Insiderwissen, 
       Unterhaltung, aber auch die Platzierung neuer Themen oder Umfragen
        lassen sich hervorragend über ein mehrmals jährlich erscheinendes
         Magazin kommunizieren. Hier beispielsweise ein vierteljährlich
          erscheinender 24-32 Seiter im Format A4 	&mdash; Corporate und Editorial Design,
           Infografiken, Bildbearbeitung inklusive Druckvorstufe von 
           <b>hasen oder bein</b>. Redaktioneller sowie fotografischer Content werden über
            ein freies Netzwerk und in Abstimmung mit dem Kunden erstellt.</Text>
    <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage alt="Finetrader Magazin" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           
       <Box width={["100%","100%","49%"]}>
            <GatsbyImage alt="Finetrader Magazin" image= {data.bilder.edges[2].node.childImageSharp.gatsbyImageData} /> 
       </Box>
      
     </Flex>   
    </div>
)}


export const FineQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_finetrader/"}}) {
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
  
  export default Finetrader