import { h, Component } from 'preact';
import HeroBlock from '../../components/hero-block';
import InfoBlock from '../../components/info-block';
import PhotoGrid from '../../components/photo-grid';
import style from './style';

export default class Home extends Component {
    render() {
        return (
            <div class={style.home}>
                <HeroBlock />
                <InfoBlock />
                <PhotoGrid />
            </div>
        );
    }
}
