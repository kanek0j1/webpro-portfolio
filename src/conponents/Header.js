import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className = "logo">
            <h3>ポートフォリオ</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
                <li>
                    <Link to="/blog">学習内容</Link>
                </li>
                <li>
                    <a href="https://ne231244test.netlify.app/">カフェ</a>
                </li>
                <li>
                    <a href="https://ne231244test2.netlify.app/">動物</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;