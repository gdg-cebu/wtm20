import style from './style';

const ButtonLink = ({children, href, className}) => (
    <a class={`${style.button} ${className}`} href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

export default ButtonLink;
