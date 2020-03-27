import style from './style';

const ButtonLink = ({children, href, primary, className}) => (
	<a
		class={`${style.button} ${className} ${primary ? style.primary : ''}`}
		href={href}
		target="_blank"
		rel="noopener noreferrer"
	>
		{children}
	</a>
);

export default ButtonLink;
