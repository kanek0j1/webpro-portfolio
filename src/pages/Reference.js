import React from 'react'
import '../css/reference.css';
import {motion} from "framer-motion"

const Reference = () => {
  return (
    <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 1.0, delay:0.4}}
            class = "reference"
        >
        <h1>提供</h1>
        <ul>
            <li>
                <p>画像提供サイト：</p><a href="https://www.pakutaso.com/20220544140post-40395.html">PAKUTAS</a>
            </li>
        </ul>
    </motion.div>
  )
}

export default Reference