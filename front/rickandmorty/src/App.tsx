import { useEffect, useState } from 'react';
import CharactersRepository from './repositories/CharactersRepository';
import { Character } from './types/character';
import CharacterCard from './components/CharacterCard';

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
      <header className="custom-header">
        <h1>The Rick and Morty Challenge</h1>
      </header>
      <main>
        <div className="showcase p-8">
          {characters.map((character) => {
            return (
              <div key={character.id} className="w-full md:w-1/2 2xl:w-1/3 px-4">
                <CharacterCard character={character} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
