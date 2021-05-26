import React,{useState} from 'react'
import {Box,Heading,Text} from '@chakra-ui/react'
import {StaticImage} from 'gatsby-plugin-image'
import SEO from '../components/seo'

const Video =()=>{
    const [video,setVideo]=useState(false)
    return(
        <Box>
            <SEO title="Animation und Videoproduktion" 
            description="Beispiel Lebenslauf."
            />
            <Heading># freie projekte</Heading>
            <Text>Animation/video</Text>
            <Text><b>Erzählerisch bewegen, </b> die Inhalte wie den Betrachter, das realisiert <b>hasen oder bein </b> neuerdings durch Text- und Bildanimationen. Ein weites Feld! Auf diese Art kann man auch eher trockene Daten und Fakten spannend kommunizieren.</Text>
            
            { !video?
            <Box role="button" width="400" height="400"  onClick={()=>setVideo(!video)}>
              <StaticImage src="../images/img/layout/farben/12-tuerkis.jpg" alt="Lebensweg" />
               <Text color="blue">Wenn Sie auf dieses Bild klicken,<br/> laden Sie externen Inhalt - <br/>mein Lebenswegvideo - von Vimeo</Text>
            </Box>
            :
            <Box mt="3" width="640" maxWidth="640" height="360">
            <iframe src="https://player.vimeo.com/video/179718796" width="100%" height="360"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
              </iframe> 
            </Box>
}
       
        </Box>
    )
}
export default Video
