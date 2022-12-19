import { getCharacters } from './getCharacters';
import * as dotenv from 'dotenv';
dotenv.config();

describe('getCharacters', () => {
    it('should return an array with the characters', async () => {
        const url = process.env.CHARACTERS_URL!;
        const characters = await getCharacters(url);
        expect(characters.items.length).toBeGreaterThan(0);
    });

    it('should not be able to return an array with the caracters', async () => {
        expect(async () => {
            await getCharacters('invalid.url')
        })
        .rejects.
        toThrowError('Invalid URL');
    })
})