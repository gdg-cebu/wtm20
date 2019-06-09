import style from './style';

const Footer = () => (
    <footer class={style.footer}>
        <picture>
            <source src="/assets/gdg-cebu.webp" type="webp" />
            <img src="/assets/gdg-cebu.png" alt="GDG Cebu Logo" />
        </picture>
    </footer>
);

export default Footer;
