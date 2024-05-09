import Head from '../components/Head';
import List from '../components/List';
import Footer from '../components/Footer';
import CardSkeleton from '../components/CardSkeleton';
import useCharacter from '../hooks/useCharacter';

const Landing = () => {
    const page = 10;
    const { isFetching, data, error } = useCharacter({ page });

    if (isFetching) {
        return (
            <>
                <Head />
                <CardSkeleton />
                <Footer />
            </>
        );
    }

    if (error) {
        return <span>error</span>;
    }

    const characters = data?.results || [];

    return (
        <>
            <Head />
            {characters && <List characters={characters} />}
            <Footer />
        </>
    );
};

export default Landing;