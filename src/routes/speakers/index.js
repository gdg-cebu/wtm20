import style from './style';
import logo from '../../images/io.svg';

const Speakers = () => (
    <div class={style.speakers}>
        <img class={style.logo} src={logo} />
        <h1 class={style.title}>Speakers</h1>
        <h2 class={style.subtitle}>
            Learn Google's latest developer products from Googlers, Google Developer Experts,
            guest speakers and more.
        </h2>
    </div>
);

export default Speakers;
