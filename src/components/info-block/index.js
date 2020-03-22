import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import event from '../../data/event.json';
import style from './style';

const InfoStat = ({value, label}) => (
    <div class={style.stat}>
        <p class={style.value}>{value}</p>
        <label>{label}</label>
    </div>
);

const InfoBlock = () => (
    <LayoutGrid class={style.info}>
        <LayoutGrid.Inner>
            <LayoutGrid.Cell tabletCols="12" desktopCols="6" class={style.text}>
                <h2>What you need to know, before you ask</h2>

                <p>
                    {event.name} brings together experts in career, web, startup, and
                    machine learning to a half day of virtual learning.
                </p>
                <p>
                    Our team creates {event.name} to be the best place for experience sharing in a
                    phenomenal atmosphere.
                </p>
            </LayoutGrid.Cell>

            <LayoutGrid.Cell tabletCols="12" desktopCols="5" class={style.stats}>
                {event.stats.map(stat => (
                    <InfoStat value={stat.value} label={stat.label} />
                ))}
            </LayoutGrid.Cell>
        </LayoutGrid.Inner>
    </LayoutGrid>
);

export default InfoBlock;
