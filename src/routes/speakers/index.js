import style from './style';
import SpeakersBlock from '../../components/speakers-block';
import logo from '../../images/devfest-logo.svg';

const Speakers = () => (
    <div class={style.speakers}>
        <img class={style.logo} src={logo} />
        <h1 class={style.title}>Speakers</h1>
        <h2 class={style.subtitle}>
            Learn Google's latest developer products from Googlers, Google Developers Experts,
            guest speakers and more.
        </h2>

        <SpeakersBlock />
    </div>
);

export default Speakers;
