import React from 'react';
import List from './List';


function App(props) {
  const store = props.store;

  return (
    <main className='App'>
      <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>

    <div class="App-list">
    {store.lists.map(list => {
      return(<List 
        header={list.header} 
        cards={list.cardIds.map(id => store.allCards[id])} 
        key={list.id}/>);
      })
    }
    </div>

    </main>
  );
}

export default App;
