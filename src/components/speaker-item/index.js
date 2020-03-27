import getPhotoUrl from '../../utils/get-photo-url';
import style from './style';

const formatBio = bio => {
    bio = bio.replace(/(<br\s*\/?>)+/gi, ' ').substring(0, 200);
    return bio.length === 200 ? bio + '...' : bio;
};

const SpeakerItem = ({speaker, onClick}) => (
    <div class={style.speaker} onClick={onClick}>
        <img src={getPhotoUrl(speaker.photo, 'w_120,q_85')} alt={speaker.name} />

        <h3>{speaker.name}</h3>
        <h4>{speaker.position}, {speaker.company}</h4>

        <p>{formatBio(speaker.bio)}</p>
    </div>
);

export default SpeakerItem;
