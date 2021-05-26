import React from 'react'
import {Heading} from '@chakra-ui/react'
import {animated, config, useSpring} from 'react-spring'
import SEO from '../components/seo'

const Kontakt = () => {
    const props = useSpring({
        from:{color:'white',fontSize:"1rem"},
        
        to: {color:'black',fontSize:"1.5rem"},
        config:config.wobbly
    })
    return(
        <animated.div style={props}>
      <SEO
        title="Kontakt"
        description="Kontaktdaten von Hasen oder Bein"
      />
            <Heading># kontakt | <span style={{color:"grey", fontWeight:200}}>contact</span></Heading>
        <p>
            Katrin Gloggengiesser | Dipl.<br/>
            Kommunikationsdesignerin(FH)<br/>
            Land: Langstraße 48 | 55422 Bacharach<br/>
            Stadt: Schleusenufer 5 | 10997 Berlin<br/>
            mobil: 0151.70842472<br/>
            kontakt: @hasenoderbein.de<br/>

        </p>
        
       
        </animated.div>
    )}
    export default Kontakt
