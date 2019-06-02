import { h, Component } from 'preact';
import Hero from '../../components/hero';
import HomeInfo from '../../components/home-info';
import style from './style';

export default class Home extends Component {
    render() {
        return (
            <div class={style.home}>
                <Hero />
                <HomeInfo />
            </div>
        );
    }
}
