import { Component } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import InfoStat from '../info-stat';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style';

export default class InfoBlock extends Component {
    render() {
        return (
            <LayoutGrid class={style.info}>
                <LayoutGrid.Inner>
                    <LayoutGrid.Cell tabletCols="12" desktopCols="5" class={style.text}>
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

                    <LayoutGrid.Cell tabletCols="12" desktopCols="5" class={style.stats}>
                        <InfoStat value="800+" label="Attendees" />
                        <InfoStat value="1" label="Day" />
                        <InfoStat value="4" label="Breakout Sessions" />
                    </LayoutGrid.Cell>
                </LayoutGrid.Inner>
            </LayoutGrid>
        );
    }
}
