import React from 'react';

function Card(props){
  const title = props.title;
  const content = props.content;

  return(
    <div class="Card">
    <button type="button">delete</button>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
)}

export default Card;