import { Component } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import logo from '../../images/io.svg';
import heroImage from '../../images/hero-image.jpg';
import style from './style';

export default class Hero extends Component {
    render() {
        return (
            <LayoutGrid class={style.hero}>
                <LayoutGrid.Inner>
                    <LayoutGrid.Cell tabletCols="12" desktopCols="5" align="middle" class={style.details}>
                        <img class={style.logo} src={logo} alt="Google I/O Logo" />
                        <h2 class={style.description}>
                            I/O brings together developers from around the globe for talks, hands-on
                            learning with Google experts, and a first look at Google’s latest developer products.
                        </h2>
                    </LayoutGrid.Cell>

                    <LayoutGrid.Cell tabletCols="12" desktopCols="6" align="middle" class={style.heroImage}>
                        <img src={heroImage} alt="Google I/O Extended Cebu 2019" />
                    </LayoutGrid.Cell>
                </LayoutGrid.Inner>
            </LayoutGrid>
        );
    }
}
