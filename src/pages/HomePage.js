import React from 'react'
import { Link } from 'react-router-dom';
import dogImage from "../images/dogmac.jpg";
import rogo3 from "../images/rogo3.png";
import '../css/homepage.css';

const HomePage = () => {
  return (
    <>
      <div class="top">
        <img src = {dogImage} alt ="dogmac"></img>
      </div>
      <ul class="showsite">
        <li>
            <h3>このサイトについて</h3>
        </li>
        <li>
            <p>この授業や自分で学んできたものを</p>
            <p>このサイトで紹介できればと思います</p>
        </li>
      </ul>

      <div class="showlogo">
        <div id="img">logo</div>
        <div>
          <p>まんまみーあ</p>
        </div>
      </div>

      <div class="showsakuhin">
        <h1>これまでの作品たち</h1>
        <div class = "cards">
          <div class = "card">
            <img src = {rogo3} alt ="rogo3"></img>
            <h3>アニマルサイト</h3>
            <p>赤閣下か閣下閣下閣下閣下か閣下か閣下かか悪化かかっかっかっかかk</p>
          </div>
          <div class = "card">
            <img src = {rogo3} alt ="rogo3"></img>
            <h3>アニマルサイト</h3>
            <p>赤閣下か閣下閣下閣下閣下か閣下か閣下かか悪化かかっかっかっかかk</p>
          </div>
          <div class = "card">
            <img src = {rogo3} alt ="rogo3"></img>
            <h3>アニマルサイト</h3>
            <p>赤閣下か閣下閣下閣下閣下か閣下か閣下かか悪化かかっかっかっかかk</p>
          </div>
        </div>
        <p><Link to="/blog">詳細はこちらから</Link></p>
      </div>

      <div class="me">
        <h1>このサイトの中の人</h1>
        <div class="image_circle"></div>
        <h1>kane</h1>
        <h2>ns予定</h2>
        <p>自動車部、edps、プログラミング関係ならとりあえず興味あるひと</p>
      </div>
      


      
      
     
    </>
  )
}

export default HomePage