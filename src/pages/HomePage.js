import React from 'react'
import { Link } from 'react-router-dom';
import dogImage from "../images/dogmac.jpg";
import rogo3 from "../images/rogo3.png";
import cafelogo from "../images/cafelogo.png";
import mohulogo from "../images/mohulogo.png";
import '../css/homepage.css';

import {motion} from "framer-motion"

const HomePage = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 1.0, delay:0.4}}
    >
      <div class="top">
        <img src = {dogImage} alt ="dogmac"></img>
      </div>
      <ul class="showsite">
        <li>
            <h3>このサイトについて</h3>
        </li>
        <li>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }}
            >
              <p>この授業や自分で学んできたもの</p>
              <p>などを紹介できればと思います</p>
            </motion.div>
        </li>
      </ul>

      <div class="showlogo">
        <div id="img">logo</div>
        <div>
          <p>このサイトのロゴ作ろうとしたんですけど時間とアイデアの問題でないです</p>
        </div>
      </div>

      <div class="showsakuhin">
        <h1>これまでの作品たち</h1>
        <div class = "cards">
          <div class = "card">
            <img src = {rogo3} alt ="rogo3"></img>
            <h3>css無しサイト</h3>
            <p>こちらはカフェのサイトをcss無しのhtmlで描きました。htmlだけなのでそれで工夫するのは難しいです。良かったらご覧ください。</p>
          </div>
          <div class = "card">
            <img src = {cafelogo} alt ="cafelogo"></img>
            <h3>cafeOSORAKU</h3>
            <p>こちらは架空のcafeのサイトを作りました。cafeの設定を考えるだけで時間がかかりました。このロゴとか頑張って描きました、決してjavaのロゴではありません。</p>
          </div>
          <div class = "card">
            <img src = {mohulogo} alt ="mohulogo"></img>
            <h3>もふもふパラダイス</h3>
            <p>動物の紹介サイトを作ってみました。全体のデザインはサバンナとかを意識しました。背景をサバンナ風に加工しましたので良かったらみてください。</p>
          </div>
        </div>
        <p><Link to="/blog">詳細はこちらから</Link></p>
      </div>

      <div class="me">
        <h1>このサイトの中の人</h1>
        <div class="image_circle"></div>
        <h1>kane</h1>
        <h2>ns予定</h2>
        <p>自動車部、edps所属</p>
        <p>プログラミング関係ならとりあえず興味あるひと</p>
      </div>
      
      <div class="friend">
        <h1>一緒にプログラミングやってくれる人募集！</h1>
        <br></br>
        <h2>・何かしら共同開発してみたい方</h2>
        <h2>・プログラミングの情報共有をしたい方</h2>
        <h2>・ハッカソンとかに出たい方</h2>
        <h2>・学校の授業以外に何かしらやりたい方</h2>
        <br></br>
        <h2>話しましょう👍</h2>

      </div>

      
      
     
    </motion.div>
  )
}

export default HomePage