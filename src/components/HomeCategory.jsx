import React, {useState} from 'react'
import acm from '../assets/acm.jpg'
import argentina from '../assets/argentina.jpg'
import barca from '../assets/barcaretro.png'
import brazil from '../assets/brazil.jpg'
import tracksuits from '../assets/tracksuits.jpg'
import training from '../assets/training.jpg'
import {motion} from 'framer-motion'
const HomeCategory = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleCardClick =(index)=>
    {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }
  
    const cardVariants={
   
      expanded :
      {
        width: '400px'
      },
      collapsed:
      {
        width: '200px'
      }
    }

    const cardImages =[acm,argentina,barca,brazil, tracksuits,training]
    const cardDescription = ['Club Teams', "National Teams", "Retro Teams", "Retro National Teams", "Tracksuits",'Training kits']
  return (
    <div className='justify-center'>
        
            <p className='font-bryson text-center font-bold uppercase text-3xl m-8'>
                Represent your favourite Club
            </p>
    <div className=' rounded-md w-full grid justify-center gap-5 md:gap-0  md:flex '>

    {[0,1,2,3,4,5].map((index)=>
          (
            <motion.div key={index}
            className={` card cursor-pointer h-[200px] sm:h-[250px] 
          bg-cover  mx-2 rounded-md ${index ===expandedIndex ? 'expanded' : ''}`}
            variants={cardVariants}
            initial='collapsed'
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration:0.5}}
            onClick={()=> handleCardClick(index)}
            style={{
              backgroundImage:`url(${cardImages[index]})`}}>

                <div className='card-content h-full flex flex-col justify-end'>
                  <div className='card-footer rounded-b-md bg-gray-800 bg-opacity-75 min-h-[50px] 
                  flex flex-col items-center justify-center'>
                      {index === expandedIndex &&
                      (
                        <p className=' text-white text-center font-bold'>
                          {cardDescription[index]}
                        </p>
                      )}

                  </div>

                </div>

            </motion.div>
          ))}

    </div>
    </div>
  )
}

export default HomeCategory