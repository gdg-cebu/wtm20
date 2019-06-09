import style from './style';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style';
import logo from '../../images/io.svg';
import heroImage from '../../images/hero-image.jpg';

const HeroBlock = () => (
    <section class={style.hero}>
        <div class={style.details}>
            <img class={style.logo} src={logo} alt="Google I/O Logo" />
            <h2>
                I/O brings together developers from around the globe for talks, hands-on
                learning with Google experts, and a first look at Google’s latest developer products.
            </h2>

            <h3>July 20, 2019 &middot; J Centre, Mandaue City</h3>

            <a class={style.button} href="#">Register Now</a>
        </div>

        <img class={style.heroImage} src={heroImage} alt="Google I/O Extended Cebu 2019" />
    </section>
);

export default HeroBlock;
