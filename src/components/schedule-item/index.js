import style from './style';
import sessions from '../../data/sessions.json';
import speakers from '../../data/speakers.json';

const ScheduleItem = ({session}) => {
    const data = sessions[session.session];

    return (
        <div
            class={[style.schedule, session.full && style.scheduleFull].join(' ')}
            style={{'grid-row-end': `span ${session.span || 1}`}}
        >
            <h2 class={style.title}>{data.title}</h2>
            <p class={style.duration}>{session.duration}</p>

            {data.speakers && (
                <div class={style.speakers}>
                    {data.speakers.map(speakerKey => {
                        const speaker = speakers[speakerKey];
                        return (
                            <div class={style.speaker}>
                                <img class={style.speakerPhoto} src={speaker.photo} alt={speaker.name} />
                                <h4 class={style.speakerName}>{speaker.name}</h4>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ScheduleItem;
