import style from './style';
import ButtonLink from '../button-link';
import logo from '../../images/wtm-logo.svg';
import event from '../../data/event.json';

const raffleUrl = 'https://gleam.io/8jbla/wtm-cebu-international-womens-day-online-summit';
const livestreamUrl = 'https://www.youtube.com/watch?v=a-4x-MaoIwA';

const HeroBlock = () => (
	<section class={style.hero}>
		<div class={style.details}>
			<img src={logo} alt={event.name} />

			<h2>{event.description}</h2>
			<h3>{event.date} <span>&middot;</span> {event.venue}</h3>

			<ButtonLink className={style.button} href={event.register_url}>Register now</ButtonLink>
			<ButtonLink className={style.button} href={raffleUrl}>Join our raffle</ButtonLink>
			<ButtonLink className={style.button} href={livestreamUrl} primary>Watch us live!</ButtonLink>
		</div>
	</section>
);

export default HeroBlock;
