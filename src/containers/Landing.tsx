import Head from '../components/Head/Head';
import List from '../components/List/List';
import Footer from '../components/Footer/Footer';
import CardSkeleton from '../components/Card/CardSkeleton';
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