import { Component } from 'preact';
import { Link } from 'preact-router/match';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import TopAppBar from 'preact-material-components/TopAppBar';
import 'preact-material-components/Drawer/style';
import 'preact-material-components/List/style';
import 'preact-material-components/TopAppBar/style';
import logo from '../../images/io.svg';
import style from './style';

class Header extends Component {
    state = {
        drawerOpened: false
    };

    openDrawer = () => this.setState({drawerOpened: true});
    closeDrawer = () => this.setState({drawerOpened: false});

    render() {
        return (
            <header>
                <TopAppBar class={style.topAppBar}>
                    <TopAppBar.Row class={style.topAppBarRow}>
                        <TopAppBar.Section align-end>
                            <button onClick={this.openDrawer}>Click</button>
                            <Link class={style.link} activeClassName={style.linkActive} href="/">Home</Link>
                            <Link class={style.link} activeClassName={style.linkActive} href="/speakers">Speakers</Link>
                            <Link class={style.link} activeClassName={style.linkActive} href="/sessions">Sessions</Link>
                        </TopAppBar.Section>
                    </TopAppBar.Row>
                </TopAppBar>

                <Drawer
                    modal
                    class={style.drawer}
                    open={this.state.drawerOpened}
                    onClose={this.closeDrawer}
                >
                    <Drawer.DrawerHeader class={style.drawerHeader}>
                        <img src={logo} alt="Google I/O Logo" />
                        <h2>July 20, 2019</h2>
                        <h3>J Centre, Mandaue City</h3>
                    </Drawer.DrawerHeader>
                    <Drawer.DrawerContent>
                        <Drawer.DrawerItem selected>Home</Drawer.DrawerItem>
                    </Drawer.DrawerContent>
                </Drawer>
            </header>
        );
    }
}

export default Header;
