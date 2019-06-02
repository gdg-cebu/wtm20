import { Component } from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style';
import style from './style';

export default class PhotoGrid extends Component {
    render() {
        return (
            <div class={style.photoGrid}>
                <img src="https://images.unsplash.com/photo-1557231146-afde25e6598f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <img src="https://images.unsplash.com/photo-1557626204-59dd03fd2d31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <img src="https://images.unsplash.com/photo-1557187669-75025b5aa07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <img src="https://images.unsplash.com/photo-1557360798-c91519105dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <img src="https://images.unsplash.com/photo-1556304085-733a497a73c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <img src="https://images.unsplash.com/photo-1556767230-449a4049ba05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <img src="https://images.unsplash.com/photo-1556684119-0c4f88c60d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <img src="https://images.unsplash.com/photo-1556983703-27576e5afa24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />

                <section class={style.content}>
                    <h3>#ioxcebu18 highlights</h3>
                    <p>This year's festival built lots of excitement. Check out photos from featured talks, hands-on learning sessions, and after-hours fun.</p>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button class={style.seePhotos} outlined>
                            See all photos
                        </Button>
                    </a>
                </section>
            </div>
        );
    }
}
