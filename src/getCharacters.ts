import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

export type Character = {
  name: string
  score: number
  type: string
  weakness?: string | undefined
}

export type CharactersResponse = {
  items: Character[]
}

export const getCharacters: (url: string) => Promise<CharactersResponse> = async (url: string) => {
  let characters: CharactersResponse = {
    items: []
  };

  await axios.get(url)
    .then(response => {
      response.data.items.forEach((item: Character) => {
        characters.items.push(item);
      })
    })
    .catch(error => {
      throw new Error('Invalid URL');
    });

  return characters;
}