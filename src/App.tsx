import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>楊竣安</h1>
        <h2>大家好我今天要來自我介紹</h2>
        <p>我是楊竣安，我平時喜歡看電視或是聽音樂</p>
        <div className="links">
          <a href="https://www.youtube.com/@TTVShow">電視</a>
          <span>和</span>
          <a href="https://www.youtube.com/@jolintsaiC">音樂</a>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Pivot_Wave.gif" alt="動圖" className="image" />
      </header>

      <div className="content">
        <section className="section card">
          <h3>我喜歡的 Youtuber 頻道</h3>
          <ul>
            <li>解婕翎</li>
            <li>陸子玄Lois</li>
            <li>台視新聞 TTV NEWS</li>
            <li>東森新聞 CH51</li>
          </ul>
        </section>

        <section className="section card">
          <h3>我喜歡的台灣小吃</h3>
          <ol>
            <li>大腸包小腸</li>
            <li>泡泡冰</li>
            <li>烤魷魚</li>
            <li>珍珠奶茶</li>
          </ol>
        </section>

        <section className="form-section card">
          <form action="/submit" method="post">
            <label htmlFor="name">姓名:</label>
            <input type="text" id="name" name="name" />
            <button type="submit">提交</button>
          </form>
        </section>

        <section className="table-section card">
          <table>
            <thead>
              <tr>
                <th>名稱</th>
                <th>年齡</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>楊竣安</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default App;
