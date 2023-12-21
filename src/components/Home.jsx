import React from 'react'
import Banner from '../assets/banner2.jpg'
import { FaLongArrowAltRight} from 'react-icons/fa'
import HomeCategory from './HomeCategory'
import HomeHow from './HomeHow'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' m-4 md:m-12 '>
        
        <div>
        <div className=' top-34 rounded-md left-4 right-4 md:left-12 md:right-12 h-[100vh]  md:h-[106vh] bg-black/60  absolute'/>
        <div className='rounded-md shadow-md my-5 '>
            <img src={Banner} alt="banner" className='rounded-md h-[100vh] w-full object-cover md:h-[106vh]  md:bg-contain shadow-md'/>
        </div>
      
      <p className='absolute top-[70vh] md:top-[90vh] text-4xl md:text-6xl font-extrabold  font-bryson tracking-wider uppercase  text-white ml-6'> Ready for the new season</p>
            <p className='absolute top-[80vh] md:top-[100vh] ml-6 font-bryson text-2xl md:text-3xl uppercase tracking-wide text-white'>
                Scroll down to learn more
            </p>
        </div>
        <div className='absolute top-[85vh] md:top-[108vh] ml-6 flex text-white'>
           <Link to='/kitman/shop'><button className='font-bryson text-xl md:text-lg tracking-wider md:tracking-normal uppercase flex'>
                Shop Now
                <p className='mx-3'>
                <FaLongArrowAltRight size={25}/>
            </p>
            </button></Link> 
         
        </div>
    <HomeCategory/>
    <HomeHow/>

    </div>
  )
}

export default Home