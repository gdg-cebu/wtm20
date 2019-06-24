import style from './style';
import partners from '../../data/partners.json';

const Partner = ({partner}) => (
    <a href={partner.url} target="_blank" rel="noopener noreferrer">
        <img src={partner.logo} />
    </a>
);

const PartnersGroup = ({group}) => (
    <div class={style.group}>
        <h3>{group.label}</h3>

        {group.items.map(partner => (
            <Partner partner={partner} />
        ))}
    </div>
);

const PartnersBlock = () => (
    <section class={style.partners}>
        <h2>Partners</h2>

        {partners.map(group => (
            <PartnersGroup group={group} />
        ))}
    </section>
);

export default PartnersBlock;
