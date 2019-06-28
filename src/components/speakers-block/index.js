import style from './style';
import SpeakerItem from '../speaker-item';
import speakers from '../../data/speakers.json';

const SpeakersBlock = () => (
    <section class={style.grid}>
        {Object.values(speakers).map(speaker => (
            <SpeakerItem speaker={speaker} />
        ))}
    </section>
);

export default SpeakersBlock;
