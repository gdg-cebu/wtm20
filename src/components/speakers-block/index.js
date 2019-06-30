import { Component } from 'preact';
import style from './style';
import SpeakerItem from '../speaker-item';
import SpeakerDetail from '../speaker-detail';
import speakers from '../../data/speakers.json';

class SpeakersBlock extends Component {
    detailRef = null

    createDetailRef = detail => this.detailRef = detail

    showSpeakerDetail = speaker => this.detailRef.open(speaker)

    render() {
        return (
            <section class={style.grid}>
                {Object.values(speakers).map(speaker => (
                    <SpeakerItem
                        speaker={speaker}
                        onClick={() => this.showSpeakerDetail(speaker)}
                    />
                ))}

                <SpeakerDetail ref={this.createDetailRef} />
            </section>
        );
    }
}

export default SpeakersBlock;
