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
                    <Link to="/Bukatu">自動車部</Link>
                </li>
                <li>
                    <Link to="/OldWork">過去課題</Link>
                </li>
                <li>
                    <Link to="/reference">リファレンス</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;