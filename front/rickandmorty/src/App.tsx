import { useEffect, useState } from 'react';
import CharactersRepository from './repositories/CharactersRepository';
import { Character } from './types/character';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count = await CharactersRepository.getCharactersCount();
        setTotalCharacters(count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (totalCharacters > 0) {
      const randomNumbers = generateRandomNumbers(totalCharacters, 5);
      CharactersRepository.getCharacterByIds(randomNumbers)
        .then((characters) => {
          setCharacters(characters);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [totalCharacters]);

  const generateRandomNumbers = (max: number, count: number): number[] => {
    const numbers: number[] = [];
    while (numbers.length < count) {
      const randomNumber = Math.floor(Math.random() * max) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

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
