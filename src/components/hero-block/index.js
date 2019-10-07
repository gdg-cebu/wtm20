import style from './style';
import ButtonLink from '../button-link';
import logo from '../../images/devfest-logo.svg';
import event from '../../data/event.json';

const HeroBlock = () => (
    <section class={style.hero}>
        <div class={style.details}>
            <img src={logo} alt={event.name} />

            <h2>{event.description}</h2>
            <h3>{event.date} <span>&middot;</span> {event.venue}</h3>

            <ButtonLink href={event.register_url}>Register Now</ButtonLink>
        </div>
    </section>
);

export default HeroBlock;
