import Head from '../components/Head';
import List from '../components/List';
import Footer from '../components/Footer';
import CardSkeleton from '../components/CardSkeleton';
import useCharacter from '../hooks/useCharacter';

const Landing = () => {
    const { isFetching, characters, error } = useCharacter();

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

    return (
        <>
            <Head />
            <List characters={characters} />
            <Footer />
        </>
    );
};

export default Landing;