import React from 'react';
import * as S from './style';

export const AboutMe = () => {

  return (
    <S.Container>
      <h1>🚀 Dev Log 🚀</h1>
      <p>✏️ This year, I have learned</p>
      <ul>
        <li>Editing with Vim.</li>
        <li>Building reactive web applications with React.</li>
        <li>Building APIs with Spring Boot.</li>
        <li>Relational Database Management with MariaDB and SQL Server.</li>
      </ul>
      <p>🔍 This year, I will learn</p>
      <ul>
        <li>Programming with Rust</li>
        <li>DApp development with Ethereum and Solidity</li>
        <li>Writing performant web applications using WebAssembly</li>
      </ul>
    </S.Container>
  );
};
