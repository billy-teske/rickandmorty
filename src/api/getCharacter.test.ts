import { enableFetchMocks } from 'jest-fetch-mock';
import getCharacter, { TCharacter, TResultApiCharacter } from './getCharacter';
import characterMock from './__mock__/characterMock';

enableFetchMocks();

describe('getCharacter Api', () => {
    beforeEach(() => {
        fetchMock.doMock();
    });

    it('should return array of character', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(characterMock));

        const { results } = await getCharacter({ page: 1 }) as TResultApiCharacter;

        expect(results.length).toEqual(1);
    });

    it('should rejects with an Error', async () => {
        fetchMock.mockReject(() => Promise.resolve(JSON.stringify({
            ok: false,
        })));

        try {
            await getCharacter({ page: 1 }) as TResultApiCharacter;
        } catch (error) {
            expect(error).toEqual(new Error('Network response was not ok'));
        }
    });

    it('should return array of characters when no page input', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(characterMock));

        const { results } = await getCharacter({}) as TResultApiCharacter;

        expect(results.length).toEqual(1);
    });

    it('should return one character', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(characterMock.results[0]));

        const character = await getCharacter({ id: 12 }) as TCharacter;

        expect(character.name).toEqual("Toxic Rick");
    });
});
