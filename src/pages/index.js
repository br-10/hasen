import React, {useRef,useState,useEffect} from 'react';
import { animated,config, useSpring } from 'react-spring';
import {Box,Heading} from '@chakra-ui/react'
import {shuffle} from '../components/utils/shuffle'
import {navigate} from 'gatsby'




const blaetterbares={
  content: [
    
    {
     link:"/periodika",
      bimg: './img/layout/farben/1-grau.jpg',
      altbild:"./img/layout/schlossallee_preview.jpg"
      
    },
    
    {
      link:"/zblatt",
      bimg: './img/layout/farben/2-orange.jpg',
      alt:"Bild",
      altbild:"./img/layout/kunstkatalog_preview.jpg"
    },
    {
      link:"/finetrader",
      bimg: './img/layout/farben/3-blau.jpg',
      alt:"Bild",
      altbild:"./img/layout/finetrader_preview.jpg"
    },
    
    {
      link:"/styleguide",
      bimg: './img/layout/farben/4-apricot.jpg',
      alt:"Bild",
      altbild:"./img/layout/styleguide_preview.jpg"
    },
   

  ]
}
const markantes={
  content: [
    {
      link:"/branding",
      bimg:'./img/layout/farben/5-tuerkis.jpg',
      alt:"Bild",
      altbild:"./img/layout/tradingclub_preview.jpg"
    },
    {
      link:"/material",
      bimg:'./img/layout/farben/6-rosa.jpg',
      alt:"Bild",
      altbild:"./img/layout/papier_preview.jpg"
    },
    {
    link:"/mood",
    bimg:'./img/layout/farben/7-orange.jpg',
    alt:"Bild",
    altbild:"./img/layout/farben_preview.jpg"
    },
    {
      link:"/illuinfo",
      bimg:'./img/layout/farben/8-grau.jpg',
      alt:"Bild",
      altbild:"./img/layout/illus_preview.jpg"
      
    },
    
  ]
}
const frei={
  content: [
    {
     link:"/jahresbuecher",
      bimg: './img/layout/farben/9-blau.jpg',
      alt:"Bild",
      altbild:"./img/layout/jahrbuch_preview.jpg"
    },
    {
     link:"/studiofoto",
      bimg:'./img/layout/farben/10-apricot.jpg',
      alt:"Bild",
      altbild:"./img/layout/studiofoto_preview.jpg"
    },
    {
      link:"/heim",
      bimg:'./img/layout/farben/11-rosa.jpg',
      alt:"Bild",
      altbild:"./img/layout/deutschland_preview.jpg"
    },
    {
      link:"/video",
      bimg:'./img/layout/farben/12-tuerkis.jpg',
      alt:"Bild",
      altbild:"./img/layout/vimeo_preview.jpg"
     
      
    }
  ]
}


const Meindir = ({item,index,altbild='./img/layout/farben/11-rosa.jpg'})=>{
  const [bildflag,setBildFlag]=useState(true)
  const myRef =useRef(null)
  // const headingprop=useSpring(
  //   {
  //     from:{fontSize:".4rem"},
  //     to:{fontSize:"1.7rem"},
  //     config: { mass: 90, tension:900, friction: 190 },
    
  //   }
  // )

  useEffect(()=>{

  },[bildflag])
  
  return(


<Box     
          ref={myRef} onMouseEnter={()=>setBildFlag(!bildflag)} onMouseDown={()=>setBildFlag(!bildflag)} onMouseOver={(e)=>myRef.current.style.opacity=".7"}
          //onMouseLeave={(e)=>myRef.current.style.opacity="1"}
          key={index}
          onMouseLeave={()=>setBildFlag(!bildflag)}
          onTouchStart={()=>setBildFlag(!bildflag)}
          onTouchEnd={()=>setBildFlag(!bildflag)}
        >
         
            { bildflag?
                <img src={item.bimg} alt={item.alt} />
             :
              <img src={item.altbild} alt={item.alt} />
            }
            
               
            
              </Box>
              
                 
           
           
        
              

)}

const StaggeredBars = () => {
const aniprop = useSpring({from:{opacity:0},to:{opacity:1},config:config.gentle})
//const content = shuffle(blaetterbares.content)
const content = blaetterbares.content
const mcontent = shuffle(markantes.content)
const fcontent = shuffle(frei.content)
console.log(fcontent)
  // const trailSprings = useTrail(info.content.length, {
  //   from:{width:"0%", color:'black',fontSize:'0rem' },
  //   to: {width:"100%", color:'white',fontSize:'2.9rem' },
  //   config: { mass: 1, tension:600, friction: 70 }
  // });

  return (
    <animated.div style={aniprop}>
      <Heading variant="sujet"># Blätterbares | <span style={{fontWeight:100}}>turn pages</span></Heading>
  <Box  display="flex" flexWrap="wrap" flexDirection={["row","row","row"]} margin="auto" justifyContent="flex-start" alignItems="flex-start">
  
      {content.map((item, index) => (
         <Box m="1" p="0" width={['100%',"45%","24%"]} key={index}   onClick={()=>navigate(blaetterbares.content[index].link)} maxWidth={["100%","50%","32%"]}  cursor="pointer">
        <Meindir 
         item={item} index={index}
        /> 
      </Box>
      ))}
    
    </Box>
    <Heading variant="sujet"># Markantes | <span style={{fontWeight:100}}>brandmarks</span></Heading>
    <Box  mt="8" display="flex" flexWrap="wrap" flexDirection={["row","row","row"]} margin="auto" justifyContent="flex-start">
     
      {mcontent.map((item, index) => (
       
        <Box m="1" p="0" width={['100%',"45%","24%"]} key={index} onClick={()=>navigate(markantes.content[index].link)}   maxWidth={["100%","50%","32%"]}  cursor="pointer">
         <Meindir item={item} index={index} />
        </Box>
      ))}
        </Box>
     <Heading variant="sujet"># freie projekte | <span style={{fontWeight:100}}>free projects</span></Heading>
   

 <Box mt="8" display="flex" flexWrap="wrap" flexDirection={["row","row","row"]} margin="auto" justifyContent="flex-start">
     
      {fcontent && fcontent.map((item, index) => (
       
        <Box m="1" p="0" width={['100%',"45%","24%"]} key={index} onClick={()=>navigate(frei.content[index].link)}    cursor="pointer">
          <Meindir item={item} index={index} />
      </Box>
      ))}
    </Box>  
    
    </animated.div>
  )
}

export default StaggeredBars;