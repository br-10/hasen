import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'
const Illuinfo = ({data}) => {

return(


    <div>
      <SEO
        title="Illustrationen und mehr"
        description="Illustrationsbeispiele von Hasen oder Bein"
      />
    <Heading># Markantes</Heading>
    <Text>Illustrationen, Infografiken & Co</Text>
    <Text variant="bildtext"><b>Es gibt unzählige Möglichkeiten Informationen visuell zum Sprechen zu bringen, </b>vom numerischen Diagramm über Zeichnungen bis zu bearbeiteten Fotografien und Collagen. Die verwendete Technik muss dabei natürlich auch zum Gesamtkonzept des Layouts passen.
                                         <b>hasen oder bein </b>illustriert (fast) alles!
                                        
    
    </Text>   
    <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage alt="Illustration" image= {data.bilder.edges[0].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           
       <Box width={["100%","100%","49%"]}>
            <GatsbyImage alt="Illustration" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} /> 
       </Box>
      
     </Flex>   
    </div>
)}


export const illuQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_illus/"}}) {
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
  
  export default Illuinfo