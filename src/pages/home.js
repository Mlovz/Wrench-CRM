import React from 'react'
import Title from '../components/title/Title'
import Content from './homeComponents/Content'
import {HelmetTitle} from '../utils/Helmet'
import { motion } from 'framer-motion'

const Home = () => {
    const homeVariants = {
        in:{
            transform: "scale(0.9)",
            opacity: 0
        },
        out:{
            transform: "scale(1)",
            opacity: 1
        },
        exit:{
            transform: "scale(0.9)",
            opacity: 0
        },
        transition:{
			duration: .5
		}
    }
    
    return (
        <motion.div 
        variants={homeVariants}
        initial='in'
        animate='out'
        exit='exit'
        transition='transition'
        className='home'>
            <HelmetTitle title='Главная' desc='Страница новостей'/>
            <Title title='Новости' subtitle='Обновление CRM до 1.2'/>
            <Content/>
        </motion.div>
    )
}

export default Home
