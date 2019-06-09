import ButtonLink from '../button-link';
import style from './style';

const PhotoGrid = () => (
    <div class={style.photoGrid}>
        <picture>
            <source src="/assets/gallery/01.webp" type="image/webp" />
            <img src="/assets/gallery/01.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/02.webp" type="image/webp" />
            <img src="/assets/gallery/02.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/03.webp" type="image/webp" />
            <img src="/assets/gallery/03.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/04.webp" type="image/webp" />
            <img src="/assets/gallery/04.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/05.webp" type="image/webp" />
            <img src="/assets/gallery/05.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/06.webp" type="image/webp" />
            <img src="/assets/gallery/06.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/07.webp" type="image/webp" />
            <img src="/assets/gallery/07.jpg" />
        </picture>
        <picture>
            <source src="/assets/gallery/08.webp" type="image/webp" />
            <img src="/assets/gallery/08.jpg" />
        </picture>

        <section class={style.content}>
            <h3>#ioxcebu18 highlights</h3>
            <p>This year's festival built lots of excitement. Check out photos from featured talks, hands-on learning sessions, and after-hours fun.</p>

            <ButtonLink href="https://photos.google.com/share/AF1QipMDTPgxptzK-uhna-JRR_60MIXATOc6EVjvvvVnjRoSMXLYw1CJfuGr_-i0aYSuOg?key=dS1ydmE5VXdKbS1LLTBTcnJtZDRHRTVqWXA4ZFZn">
                See all photos
            </ButtonLink>
        </section>
    </div>
);

export default PhotoGrid;
