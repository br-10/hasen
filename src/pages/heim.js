import React from 'react'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import {Box,Flex,Heading,Text} from '@chakra-ui/react'
import SEO from '../components/seo'
const Heim = ({data}) => {

return(
 


    <div>
      <SEO
        title="Freie Arbeiten zum Deutschen Heim"
        description="Fotografische Dokumentation zu einer deutschen Wohnkultur"
      />
    <Heading># Markantes</Heading>
    <Text>deutsches Heim</Text>
    <Text variant="bildtext"><b>Hinter die Gardinen </b> blickt <b>hasen oder bein </b>seit Jahren aus Leidenschaft und staunt. So leben wir Deutschen. Eine Studie im Werden...
    
    </Text>   
    <Flex>
   
           <Box width={["100%","100%","49%"]}>
                <GatsbyImage alt="Ein deutsches Heim" image= {data.bilder.edges[0].node.childImageSharp.gatsbyImageData} />
          
           </Box> 
           
       <Box width={["100%","100%","49%"]}>
            <GatsbyImage alt="Ein deutsches Heim" image= {data.bilder.edges[1].node.childImageSharp.gatsbyImageData} /> 
       </Box>
      
     </Flex>   
    </div>
)}


export const heimQuery = graphql`
 query {
  bilder:allFile(filter: {absolutePath: {regex: "/_deutschland/"}}) {
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
  
  export default Heim