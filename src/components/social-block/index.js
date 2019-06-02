import style from './style';
import hashtagGif from '../../images/io19-hashtag.gif';

const SocialBlock = () => (
    <section class={style.social}>
        <div class={style.text}>
            <p>Keep in touch with GDG Cebu for the latest I/O Extended announcements.</p>

            <div class={style.links}>
                <a href="#" target="_blank" rel="noopener noreferrer" class="facebook">Facebook</a>
                <a href="#" target="_blank" rel="noopener noreferrer" class="twitter">Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer" class="meetup">Meetup</a>
            </div>
        </div>

        <img src={hashtagGif} />
    </section>
);

export default SocialBlock;
