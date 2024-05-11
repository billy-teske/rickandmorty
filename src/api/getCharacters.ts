import apiConstants from '../constants/apiConstants';

export type TCharacter = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export type TResultApiCharacters = {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: TCharacter[];
};

const getCharacters = async (): Promise<TResultApiCharacters> => {
    const url = `${apiConstants.character}?page=${20}`;
    const response: Response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export default getCharacters;
