import React from 'react'
import '../css/oldwork.css';

import cafecss from "../images/cafecss.png";
import cafe from "../images/cafe.png";
import mohupara from "../images/mohupara.png";

import {motion} from "framer-motion"

const OldWork = () => {
  return (
    <div>
        <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 1.0, delay:0.4}}
        >
        <div class="main1">
                <h1>過去に作成したwebページ</h1>
                
                <div class="box5">
                    <h3>cafeCssなし</h3>
                    <img src = {cafecss} alt ="cafecss"></img>
                    <p>css無しでのカフェページを作りました。</p>
                    <a href="https://ne231244test.netlify.app/nocss">詳細はこちらから</a>
                    
                </div>

                <div class="box5">
                    <h3>Cafe</h3>
                    <img src = {cafe} alt ="cafe"></img>
                    <p>実在しないカフェページを作りました</p>
                    <a href="https://ne231244test.netlify.app/">詳細はこちらから</a>
                </div>

                <div class="box5">
                    <h3>もふもふパラダイス</h3>
                    <img src = {mohupara} alt ="mohupara"></img>
                    <p>動物園を意識した動物サイトを作りました</p>
                    <a href="https://ne231244test2.netlify.app/">詳細はこちらから</a>
                </div>

            </div>
        </motion.div>
    </div>
  )
}

export default OldWork