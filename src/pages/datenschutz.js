import React from 'react'
import {Box, Text,Heading} from '@chakra-ui/react'
import SEO from '../components/seo'


const Datenschutz = () => {
    
    return(
        <div>
             <SEO
        title="Datenschutz von Haben oder Sein"
        description="b2b-Kommunikation am Beispiel des Finetraders"
      />
        <Box>
            <Heading># datenschutz | <span style={{color:"grey", fontWeight:200}}>save your dates</span></Heading>
        <Text>
           Diese Webseite ermittelt keine privaten Daten und kann deshalb auch keine Daten an Dritte weitergeben. <br/>
           Wenn externe Inhalte angeboten werden (Vimeo Film), können Daten von Ihnen von der Vimeoplattform ermittelt werden.
           Externe Inhalte werden nur mit ihrer Einwilligung angeboten.

           Für die technische Realisierung einer Internetseite müssen technische Daten ermittelt werden, wie z.B. die IP Adresse oder das benutzte Endgerät.
           Diese Daten können nicht mit Ihnen in Verbindung gesetzt werden. In der Regel werden sie nach kurzer Zeit automatisch gelöscht.
        

        </Text>
        
        </Box>
        </div>
    )}
    export default Datenschutz
