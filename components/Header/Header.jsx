import React from 'react';
import style from "./header.module.css";

const Header = () => {
  return (
    <div>
      <span onClick={() => window.scroll(0 ,0)} className={style.header}>🎬 Entertainment hub 🎥</span>
    </div>
  );
};

export default Header;
