import { battle } from './main'

describe('main', () => {
  it('should return a win for hero even if the villain is his weakness', async () => {
    const battleRun = await battle('Superman', 'Lex Luthor');
    const expectedValue = { name: "Superman", score: 8.6, type: 'hero', weakness: 'Lex Luthor' };

    expect(battleRun).toEqual(expectedValue)
  })

  it('should return a win for hero even if the villain is not his weakness', async () => {
    const battleRun = await battle('Superman', 'Harley Quinn');
    const expectedValue = { name: "Superman", score: 9.6, type: 'hero', weakness: 'Lex Luthor' };

    expect(battleRun).toEqual(expectedValue)
  })

  it('should return a win for hero when hero has no weakness', async () => {
    const battleRun = await battle('Thor', 'Joker');
    const expectedValue = { name: "Thor", score: 9.2, type: 'hero' };

    expect(battleRun).toEqual(expectedValue)
  })

  it(`should return a win for villain if villain is the hero's weakness`, async () => {
    const battleRun = await battle('Batman', 'Joker');
    const expectedValue = { name: "Joker", score: 8.2, type: 'villain' };

    expect(battleRun).toEqual(expectedValue)
  })

  it(`should return a win for villain even if villain is not the hero's weakness`, async () => {
    const battleRun = await battle('Spiderman', 'Joker');
    const expectedValue = { name: "Joker", score: 8.2, type: 'villain' };

    expect(battleRun).toEqual(expectedValue)
  })
})