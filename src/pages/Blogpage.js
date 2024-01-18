import React from 'react'
import '../css/blogpage.css';
import react from "../images/react.jpg";
import frame from "../images/frame.jpg";
import figma from "../images/figma.jpg";
import gitkun from "../images/gitkun.jpg";
import zoukun from "../images/zoukun.jpg";

import {motion} from "framer-motion"

const Blogpage = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 1.0, delay:0.4}}
    >
      <div class="main">
            <h1>今回のサイト作成で学習したもの</h1>
            
            <div class="box">
                <h3>React</h3>
                <img src = {react} alt ="react"></img>
                <p>
                    ライオンは大型の猫科動物で、アフリカとアジア</p>
            </div>

            <div class="box">
                <h3>FramerMotion</h3>
                <img src = {frame} alt ="frame"></img>
                <p>
                    チンパンジーは知られるところでは最も近縁の人類とされる霊長類で、その可愛らしさは知性</p>
            </div>

            <div class="box">
                <h3>Figma</h3>
                <img src = {figma} alt ="figma"></img>
                <p>
                    レッサーパンダは小柄で愛くる</p>
            </div>

            <div class="box">
                <h3>カバ</h3>
                <img src = {gitkun} alt ="gitkun"></img>
                <p>
                    カバは大きな丸い体、短い脚、</p>
            </div>

            <div class="box">
                <h3>PostgreSQL</h3>
                <img src = {zoukun} alt ="zoukun"></img>
                <p>
                    ゴリラは強靭で優雅な大型霊長類で、その力強い姿勢と同時に穏やかで知的な表情が</p>
            </div>

            <p>
                フリー素材サイト：<a href="https://www.pakutaso.com/">https://www.pakutaso.com/</a>
            </p>
        </div>
    </motion.div>
  )
}

export default Blogpage