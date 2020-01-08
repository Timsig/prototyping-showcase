import React from 'react';
import { Link } from 'react-router-dom';

const headertext = ({ headline, subtext, children }) => {
 
  return (
    <div className="page-head-wrap">
      <h1>{headline}</h1>
      {subtext ? <p className="intro">{ subtext }</p> : ""}
      { children }
    </div>
  )
}

export default headertext;