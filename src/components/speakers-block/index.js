import style from './style';
import SpeakerItem from '../speaker-item';
import speakers from './speakers.json';

const SpeakersBlock = () => (
    <section class={style.grid}>
        {speakers.map(speaker => (
            <SpeakerItem speaker={speaker} />
        ))}
    </section>
);

export default SpeakersBlock;
