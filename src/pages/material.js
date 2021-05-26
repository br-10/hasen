import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'

const Material = ({data}) => {

return(


    <div>
      <SEO
        title="Material"
        description="Die Wahl des Materials ist eine relante Entscheidung"
      />
    <Heading># Markantes</Heading>
    <Text>Ihr Auftritt sollte nicht von Pappe sein.</Text>
    <Text variant="bildtext"><b>Auch das Material ist eine Botschaft.</b> Wenn Sie qualitativ hochwertig auftreten und sich vom Durchschnitt abheben wollen, dann nehmen wir uns gerne die Zeit, das richtige Material und die richtige Verpackung für Ihren Auftritt auszusuchen  	&mdash; von der kleinen Visitenkarte über Kartonagen, Schuber, CD-Hüllen, Banderolen bis hin zu Roll-Ups, Bannern und Wandsystemen für Messen und Ausstellungen. 
    
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


export const MaterialQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_papier/"}}) {
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
  
  export default Material