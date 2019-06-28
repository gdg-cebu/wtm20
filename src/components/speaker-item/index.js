import style from './style';

const formatBio = bio => {
    bio = bio.replace(/(<br\s*\/?>)+/gi, ' ').substring(0, 200);
    return bio.length === 200 ? bio + '...' : bio;
};

const SpeakerItem = ({speaker}) => (
    <div class={style.speaker}>
        <img src={speaker.photo} alt={speaker.name} />

        <h3>{speaker.name}</h3>
        <h4>{speaker.position}, {speaker.company}</h4>

        <p>{formatBio(speaker.bio)}</p>
    </div>
);

export default SpeakerItem;
