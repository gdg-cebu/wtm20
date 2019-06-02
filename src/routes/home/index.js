import { h, Component } from 'preact';
import Hero from '../../components/hero';
import HomeInfo from '../../components/home-info';
import PhotoGrid from '../../components/photo-grid';
import style from './style';

export default class Home extends Component {
    render() {
        return (
            <div class={style.home}>
                <Hero />
                <HomeInfo />
                <PhotoGrid />
            </div>
        );
    }
}
