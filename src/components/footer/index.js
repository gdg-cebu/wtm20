import style from './style';

const Footer = () => (
    <footer class={style.footer}>
        <a href="https://gdgcebu.org/" target="_blank" rel="noopener noreferrer">
            <picture>
                <source src="/assets/gdg-cebu.webp" type="webp" />
                <img src="/assets/gdg-cebu.png" alt="GDG Cebu Logo" />
            </picture>
        </a>
    </footer>
);

export default Footer;
