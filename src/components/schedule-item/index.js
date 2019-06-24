import style from './style';
import sessions from '../schedule-block/sessions.json';

const ScheduleItem = ({session}) => {
    const data = sessions[session.session];

    return (
        <div
            class={[style.schedule, session.full && style.scheduleFull].join(' ')}
            style={{'grid-row-end': `span ${session.span || 1}`}}
        >
            <h2 class={style.title}>{data.title}</h2>
            <p class={style.duration}>{session.duration}</p>
        </div>
    );
};

export default ScheduleItem;
