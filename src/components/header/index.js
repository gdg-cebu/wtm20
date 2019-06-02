import { Link } from 'preact-router/match';
import TopAppBar from 'preact-material-components/TopAppBar';
import 'preact-material-components/TopAppBar/style.css';
import style from './style';

const Header = () => (
    <TopAppBar class={style.topAppBar} fixed>
        <TopAppBar.Row class={style.topAppBarRow}>
            <TopAppBar.Section align-end>
                <Link class={style.link} activeClassName={style.linkActive} href="/">Home</Link>
                <Link class={style.link} activeClassName={style.linkActive} href="/speakers">Speakers</Link>
                <Link class={style.link} activeClassName={style.linkActive} href="/sessions">Sessions</Link>
            </TopAppBar.Section>
        </TopAppBar.Row>
    </TopAppBar>
);

export default Header;
