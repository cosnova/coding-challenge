import { Link } from 'react-router-dom';
import { Hero, HeroCTA, HeroCaption, HeroCaptionWrapper, HeroImage, Wrapper } from "./Home.styled";

const Home = () => {
    return <Wrapper>
        <Hero>
            <HeroImage src="/hero.jpg" alt="Hero image" />
            <HeroCaptionWrapper>
                <HeroCaption>Hello there!</HeroCaption>
                <HeroCTA variant='outlined' component={Link} to="/products">Check our products</HeroCTA>
            </HeroCaptionWrapper>
        </Hero>
    </Wrapper>
};

export default Home;