import axios, { AxiosResponse } from 'axios';
import { Character } from '../types/character';

const baseURL = process.env.REACT_APP_API_URL;

const CharactersRepository = {

    getCharacters: async (): Promise<Character[]> => {
        const response: AxiosResponse<Character[]> = await axios.get(`${baseURL}/rick-and-morty/characters`);
        return response.data;
    },

    getCharactersCount: async (): Promise<number> => {
        const response: AxiosResponse<{ count: number }> = await axios.get(`${baseURL}/rick-and-morty/characters/count`);
        return response.data.count;
    },

    getCharacterByIds: async (ids: number[]): Promise<Character[]> => {
        const response: AxiosResponse<Character[]> = await axios.get(`${baseURL}/rick-and-morty/characters/${ids.join(',')}`);
        return response.data;
    },

    getFilteredCharacters: async (filters: any): Promise<Character[]> => {
        const response: AxiosResponse<Character[]> = await axios.get(`${baseURL}/rick-and-morty/characters/filter`, { params: filters });
        return response.data;
    },
};

export default CharactersRepository;
