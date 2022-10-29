import * as React from 'react';
import { people } from './data.js';
import { getImageUrl } from './utils.js';
import { useImmer } from 'use-immer';
import './style.css';

/*function Button() {
  const [ {counter , times , dummy} ,setState] =useState({
    counter:0,
    times:0,
    dummy:"dummy"
  });

  const handleClick = () => {
      setState(values => ({ ... values , })
    )
  }
  

  return (
    <>
      <button onClick={handleClick}>add1</button><br/>
      <h1>counter : {counter} </h1>
      <h1>times : {times} </h1>
      <h1>dummy : {dummy} </h1>
    </>
  )

}*/

/*function List() {
  const listItems = people.map(person => (
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}*/

/*const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output =[];
  poem.lines.forEach((line ,i) =>{
    output.push(<hr key={i + '-separator'} />);
    output.push(<p key={i + '-text'} >{line}</p>);
  });
  output.shift();
  return (
    <article>
      {output}
    </article>
  );
}*/

/*export default function App() {
  const [person ,updatePerson]=useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });
  const handleNameChange = ({ target }) =>{
    updatePerson(old => {
      old.name = target.value;
    });
  }
  const handleTitleChange = ({ target }) =>{
    updatePerson( old =>{
      old.artwork.title=target.value;
    })
  }
  const handleCityChange = ({ target }) =>{
    updatePerson( old =>{
      old.artwork.city=target.value;
    })
  }
  const handleImageChange = ({ target }) =>{
    updatePerson( old =>{
      old.artwork.image=target.value;
    })
  }
  return (
    <>
      <label>
          Name:
          <input
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Title:
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          City:
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
        <label>
          Image:
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
          />
        </label>
        <p>
          <i>{person.artwork.title}</i>
          {' by '}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img
          src={person.artwork.image}
          alt={person.artwork.title}
        />
    </>
  );
}*/

/*const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];*/

/*
export default function App() {
  const [list ,updateList ] =useImmer(initialList);
  const handleClick = (id) => {
    updateList(draft => {
      let i = draft.find(a => a.id == id );
      i.seen = !i.seen;
    })
  }

  return (
    <div>
      <h1>Hello world </h1>
      {list.map(l => ( 
        <>
          <li>
            {l.title} : {l.seen?"true":"false"}
            <button onClick={() => handleClick(l.id)}> Switch </button>
          </li>
        </>
      ))}
    </div>
  )

}*/

export default function App() {
  return (
    <div>
      <h1>HELLO WORLD </h1>
    </div>
  );
}
