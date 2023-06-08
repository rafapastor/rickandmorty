import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CharactersRepository from './repositories/CharactersRepository';
import { Character } from './types/character';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    CharactersRepository.getCharactersCount().then((count) => {
      console.log(count);
      // get 5 numbers between 1 and count
      const randomNumbers = [];
      for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * count) + 1);
      }
      // getCharacterByIds of the random numbers
      CharactersRepository.getCharacterByIds(randomNumbers).then((characters) => {
        setCharacters(characters);
      }
      );
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {characters.map((character) => {
          return <p key={character.id}>{character.name}</p>

        }
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
