import { useEffect, useState } from 'react';
import CharactersRepository from './repositories/CharactersRepository';
import { Character } from './types/character';
import CharacterCard from './components/CharacterCard';
import Filter from './components/Filter';
import { Filters } from './types/filter';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [filters, setFilters] = useState<Filters>({
    name: '',
    species: '',
    type: '',
    gender: '',
    status: '',
  });
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count = await CharactersRepository.getCharactersCount();
        setTotalCharacters(count);
      } catch (error) {
        console.error(error);
      }

      // Obtén los filtros de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const newFilters = ['name', 'species', 'type', 'gender', 'status'].reduce((filters, key) => {
        const value = urlParams.get(key);
        if (value) {
          (filters as unknown as { [key: string]: string })[key] = value;
        }
        return filters;
      }, {} as Filters);

      if (Object.keys(newFilters).length > 0) {
        setFilters(newFilters);
        setIsFiltered(true);
      }
    };

    fetchData();
  }, []);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isFiltered) {
          const data: any = await CharactersRepository.getFilteredCharacters(filters);
          if (data.results.length > 0) {
            setCharacters(data.results);
          } else {
            setCharacters([]);
          }
        } else if (totalCharacters > 0) {
          const randomNumbers = generateRandomNumbers(totalCharacters, 5);
          const characters = await CharactersRepository.getCharacterByIds(randomNumbers);
          setCharacters(characters);
        }
      } catch (error) {
        console.error(error);
        setCharacters([]);
      }
    };

    fetchData();
  }, [filters, isFiltered, totalCharacters]);

  const handleFilter = (newFilters: Filters) => {
    setIsFiltered(true);
    setFilters(newFilters);
  };

  const handleClear = () => {
    setIsFiltered(false);
    setFilters({
      name: '',
      species: '',
      type: '',
      gender: '',
      status: '',
    });
  };

  return (
    <div className="App">
      <header className="custom-header">
        <h1>The Rick and Morty Challenge</h1>
      </header>
      <main>
        <Filter
          onFilter={handleFilter}
          onClear={handleClear}
          filters={filters}
        />
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
