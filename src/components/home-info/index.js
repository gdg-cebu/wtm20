import { Component } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style';

export default class HomeInfo extends Component {
    render() {
        return (
            <LayoutGrid class={style.info}>
                <LayoutGrid.Inner>
                    <LayoutGrid.Cell cols="6">
                        <h2>What you need to know, before you ask</h2>

                        <p>
                            Google I/O Extended 2019 Cebu brings together experts in Machine Learning, Android,
                            Web and Cloud technologies to a day full of sessions, workshops and showcases.
                        </p>
                        <p>
                            Our team creates Google I/O Extended to be the best place for experience sharing in a
                            phenomenal atmosphere.
                        </p>
                    </LayoutGrid.Cell>
                </LayoutGrid.Inner>
            </LayoutGrid>
        );
    }
}
