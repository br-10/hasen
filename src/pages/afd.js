import React from 'react'
import {animated, config, useSpring} from 'react-spring'
import {Box,Text,Heading,Grid} from '@chakra-ui/react'
//import {StaticImage} from 'gatsby-plugin-image'

export default function Afd(){
    
    const afpros=useSpring({
        from: 
        {width:'0%',
         display:'flex',
         justifyContent: 'flex-start',
         flexDirection: 'column',
        alignItems:'flex-start',
        alignContent: 'flex-start',
       
    },
        to:{width:'100%'},
        
        config:config.gentle})
       
       
return(
<animated.div style={afpros}>
      <Grid p="2" width="100%" templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap={1}>
        <Box width="100%">
              <Heading variant="titel">Stolpern</Heading>
              <Text>Ich will das n jlh ljhj hj hljk icht weil</Text>
              {/* <StaticImage 
              src="../images/daemmer.jpeg" 
              alt="Bild"
              layout= "constrained"
              placeholder= "blurred"
              
              
             

              /> */}
        </Box>
        <Box width="100%" >
              <Heading variant="titel">Du willst nicht wiasdf</Heading>
              <Text>Ich will das n jlh ljhj hj hljk icht weil</Text>
              {/* <StaticImage 
              src="../images/huetten/h_2.jpg" 
              alt="Bild"
              layout= "constrained"
              
             
              />  */}
        </Box>
      
          </Grid>

  
   </animated.div>  
)

}