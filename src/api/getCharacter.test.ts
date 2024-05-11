import { enableFetchMocks } from 'jest-fetch-mock';
import getCharacter from './getCharacter';
import characterMock from './__mock__/characterMock';

enableFetchMocks();

describe('getCharacter Api', () => {
    beforeEach(() => {
        fetchMock.doMock();
    });

    it('should return array of characters', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(characterMock));

        const { results } = await getCharacter({ page: 1 });

        expect(results.length).toEqual(1);
    });

    it('should rejects with an Error', async () => {
        fetchMock.mockReject(() => Promise.resolve(JSON.stringify({
            ok: false,
        })));

        try {
            await getCharacter({ page: 1 });
        } catch (error) {
            expect(error).toEqual(new Error('Network response was not ok'));
        }
    });
});
