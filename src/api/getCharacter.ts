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

interface IPropsGetCharacter {
    id?: number;
    page?: number;
}

export type TResultApiCharacters = {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: TCharacter[];
};

type TGetCharacter = (props: IPropsGetCharacter) => Promise<TResultApiCharacters>;

const getCharacter: TGetCharacter = async ({ id, page }) => {
    const params = id ? `/${id}` : `?page=${page || 0}`;
    const url = `${apiConstants.character}${params}`;

    const response: Response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export default getCharacter;
