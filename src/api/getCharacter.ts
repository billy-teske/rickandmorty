import apiConstants from '../constants/apis.json';

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

interface IPropsCharacter {
    page: number;
}

interface IResultCharacter {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: TCharacter[];
}

const getCharacter = async ({ page }: IPropsCharacter): Promise<IResultCharacter> => {
    const url = `${apiConstants.character}?page=${page}`;
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response: Response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export default getCharacter;
