import React from 'react';
import Card from './Card';

function List (props){
  const header = props.header;
  const cards = props.cards;

  return (
    <section class="List">
      <header class="List-header">
        <h2>{header}</h2>
      </header>
        <div class="List-cards">
          {cards.map(card => (<Card title={card.title} content={card.content} key={card.id}/>))}
        </div>
    </section>
    
  )
}

export default List;