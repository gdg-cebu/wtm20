import style from './style';

const ButtonLink = ({children, href}) => (
    <a class={style.button} href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

export default ButtonLink;
