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
      <div class="main6">
            <h1>今回のサイト作成で学習したもの</h1>
            
            <div class="box6">
                <h3>React</h3>
                <img src = {react} alt ="react"></img>
                <p>このサイトのほとんどと言っていいです。reactというのはjavascriptのフレームワークになります。コンポーネントというものがあり、
                  これは部品的な意味があり、それを組み合わせることによりwebサイトを完成させます。
                  勉強したもののフークスという機能をあまり使わなかったので、今後使っていきたい。</p>
            </div>

            <div class="box6">
                <h3>FramerMotion</h3>
                <img src = {frame} alt ="frame"></img>
                <p>こちらは上のreactのアニメーションライブラリになります。このライブラリを使えば、アニメーションが簡単に表示できるというものになります。
                  しかし使い方を学習するのに時間はかかりました。
                </p>
            </div>

            <div class="box6">
                <h3>Figma</h3>
                <img src = {figma} alt ="figma"></img>
                <p>こちらはプログラミングというよりかはwebデザインを考えるときに使います。
                  ただ頭の中でデザインを考えながらコーディングするより、このツールを使えば簡単に配置などを決めれるので便利です。
                  しかし、機能がたくさんあり、使い方を学習するのに時間がかかりました。
                  </p>
            </div>

            <div class="box6">
                <h3>GitHub</h3>
                <img src = {gitkun} alt ="gitkun"></img>
                <p>こちらはリモートディレクトリに自分のローカルディレクトリを連携できるツールです。メリットに関しては、
                  共同開発で使うことになる、他のツールの連携がある、自分のこれまでのデータが残るというのがあります。
                  プログラミング系の仕事に就きたい人は早めに覚えとくといいかもしれません。
                </p>
            </div>

            <div class="box6">
                <h3>PostgreSQL</h3>
                <img src = {zoukun} alt ="zoukun"></img>
                <p>こちらはサーバーサイドを書いてnetlifyのfunction機能も用いて投稿サイトを作ろうと考えましたが、
                  時間と難易度が少し高く辞めてしまいました。これからの開発でまた挑戦したいです。
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Blogpage