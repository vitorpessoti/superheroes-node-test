import { getCharacters, Character } from './getCharacters'
import * as dotenv from 'dotenv';
dotenv.config();

export async function battle(heroName: string, villainName: string): Promise<Character> {
  const url = process.env.CHARACTERS_URL!;
  const characters = await getCharacters(url);

  const hero: Character = characters.items.find(e => e.name === heroName)!
  const villain: Character = characters.items.find(e => e.name === villainName)!

  if (isHeroWeakness(hero, villain)) {
    hero.score -= 1.0;
  }

  return hero!.score >= villain!.score ? hero! : villain!
}

function isHeroWeakness(hero: Character, villain: Character) {
  return hero.weakness === villain.name;
}