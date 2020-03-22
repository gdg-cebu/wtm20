import ButtonLink from '../button-link';
import event from '../../data/event.json';
import style from './style';

const prod = process.env.NODE_ENV === 'production';

const getPhotoUrl = (path, transforms) => {
    const cloudinaryUrl = 'https://res.cloudinary.com/demo/image/fetch';
    const siteUrl = 'https://wtm.gdgcebu.org';

    const segments = [
        prod ? cloudinaryUrl : null,
        prod ? transforms : null,
        prod ? siteUrl : null,
        path
    ];
    return segments.filter(Boolean).join('/');
};

const PhotoGrid = () => (
    <div class={style.photoGrid}>
        <picture>
            <source src={getPhotoUrl('assets/gallery/01.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/01.jpg', 'w_560,q_85')} />
        </picture>
        <picture>
            <source src={getPhotoUrl('assets/gallery/02.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/02.jpg', 'w_560,q_85')} />
        </picture>
        <picture>
            <source src={getPhotoUrl('assets/gallery/03.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/03.jpg', 'w_560,q_85')} />
        </picture>
        <picture>
            <source src={getPhotoUrl('assets/gallery/04.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/04.jpg', 'w_560,q_85')} />
        </picture>
        <picture>
            <source src={getPhotoUrl('assets/gallery/05.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/05.jpg', 'w_560,q_85')} />
        </picture>
        <picture>
            <source src={getPhotoUrl('assets/gallery/06.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/06.jpg', 'w_560,q_85')} />
        </picture>
        <picture>
            <source src={getPhotoUrl('assets/gallery/07.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/07.jpg', 'w_560,q_85')} />
        </picture>
        <picture>
            <source src={getPhotoUrl('assets/gallery/08.jpg', 'w_560,f_webp,q_85')} type="image/webp" />
            <img src={getPhotoUrl('assets/gallery/08.jpg', 'w_560,q_85')} />
        </picture>

        <section class={style.content}>
            <h3>{event.past_event.hashtag} highlights</h3>
            <p>Last year's Women Techmakers Cebu built lots of excitement. Check out photos from
                featured talks, hands-on learning sessions, and after-hours fun.</p>

            <ButtonLink href={event.past_event.gallery_url}>
                See all photos
            </ButtonLink>
        </section>
    </div>
);

export default PhotoGrid;
