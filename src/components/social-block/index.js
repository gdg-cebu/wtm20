import style from './style';
import event from '../../data/event.json';

const SocialBlock = () => (
    <section class={style.social}>
        <div class={style.text}>
            <p>Keep in touch with GDG Cebu for the latest {event.name} announcements.</p>

            <div class={style.links}>
                <a href="https://www.facebook.com/gdgcebuorg/" target="_blank" rel="noopener noreferrer" class="facebook">Facebook</a>
                <a href="https://twitter.com/gdgcebu" target="_blank" rel="noopener noreferrer" class="twitter">Twitter</a>
                <a href="https://www.meetup.com/GDGCebu/" target="_blank" rel="noopener noreferrer" class="meetup">Meetup</a>
            </div>
        </div>
    </section>
);

export default SocialBlock;
