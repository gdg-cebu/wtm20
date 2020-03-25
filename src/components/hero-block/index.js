import style from './style';
import ButtonLink from '../button-link';
import logo from '../../images/wtm-logo.svg';
import event from '../../data/event.json';

const HeroBlock = () => (
	<section class={style.hero}>
		<div class={style.details}>
			<img src={logo} alt={event.name} />

			<h2>{event.description}</h2>
			<h3>{event.date} <span>&middot;</span> {event.venue}</h3>

			<ButtonLink className={style.button} href={event.register_url}>Register now</ButtonLink>
			<ButtonLink className={style.button} href="https://gleam.io/8jbla/wtm-cebu-international-womens-day-online-summit">Join our raffle</ButtonLink>
		</div>
	</section>
);

export default HeroBlock;
