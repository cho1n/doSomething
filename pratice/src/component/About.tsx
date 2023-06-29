import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <div>
    <h1>소개 페이지</h1>
    <p>이곳은 소개 페이지입니다.</p>
    <Link to="/">홈 페이지로 이동</Link>
  </div>
);

export default About;
