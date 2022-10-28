import * as React from 'react';
import { people } from './data.js';
import { getImageUrl } from './utils.js';
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

export default function App() {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
}
