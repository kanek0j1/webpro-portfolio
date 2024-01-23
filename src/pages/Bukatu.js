import React from 'react'
import '../css/bukatu.css';
import jidosha2 from "../images/jidosha2.jpg";
import jidosha1 from "../images/jidosha1.jpg";
import jidosha3 from "../images/jidosha3.jpg";
import jidosha4 from "../images/jidosha4.png";

import {motion} from "framer-motion"



const Bukatu = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 1.0, delay:0.4}}
    >
        <div class="main">
            <div class="kodawari">
                <h2>自動車部という存在を知っているか</h2>   
            </div>

            <div class="box3">
            <img src = {jidosha2} alt ="jidosha2"></img>
                <h3>自動車部というのは体育会系の部活であり、普段は車の整備や、ジムカーナというタイムトライアルに出たりしています。とても楽しい部活です!</h3>   
            </div>

            <div class="box2">
                <h3>ジムカーナやレース中は車に問題がよく起るので毎回修理や点検をします！</h3>
                <img src = {jidosha1} alt ="jidosha1"></img>
            </div>

            <div class="box3">
                <img src = {jidosha3} alt ="jidosha3"></img>
                <h3>これはダートラという砂の上を車で走りタイムを競う競技です。自分はまだやったことないのでやってみたいです。</h3>   
            </div>

            <div class="box2">
                <h3>こちらは軽耐久レースという競技です。20台以上の車同時に走り競い合います。すぐそこに速い速度で車がいるので緊張感があります</h3>
                <img src = {jidosha4} alt ="jidosha4"></img>
            </div>
        </div>
    </motion.div>
  )
}

export default Bukatu