import HeroBlock from '../../components/hero-block';
import InfoBlock from '../../components/info-block';
import PhotoGrid from '../../components/photo-grid';
import PartnersBlock from '../../components/partners-block';
import style from './style';

const Home = () => (
    <div class={style.home}>
        <HeroBlock />
        <InfoBlock />
        <PhotoGrid />
        <PartnersBlock />
    </div>
);

export default Home;
