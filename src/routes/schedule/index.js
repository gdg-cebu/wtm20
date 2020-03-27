import ScheduleBlock from '../../components/schedule-block';
import style from './style';
import logo from '../../images/wtm-logo.svg';

const Schedule = () => (
    <div class={style.schedule}>
        <img class={style.logo} src={logo} />
        <h1 class={style.title}>Schedule</h1>

        <ScheduleBlock />
    </div>
);

export default Schedule;
