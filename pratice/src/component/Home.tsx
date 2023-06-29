import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <div>
    <h1>홈 페이지</h1>
    <p>이곳은 홈 페이지입니다.</p>
    <Link to="/about">소개 페이지로 이동</Link>
  </div>
);

export default Home;