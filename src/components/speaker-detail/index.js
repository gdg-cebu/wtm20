import { Component} from 'preact';
import Dialog from 'preact-material-components/Dialog';
import IconButton from 'preact-material-components/IconButton';
import 'preact-material-components/Dialog/style';
import 'preact-material-components/IconButton/style';
import style from './style';
import Icon from 'preact-material-components/Icon';

class SpeakerDetail extends Component {
    state = {
        speaker: null
    }

    dialogRef = null;

    createDialogRef = dialog => this.dialogRef = dialog;

    open = speaker => {
        this.setState({speaker});
        this.dialogRef.MDComponent.show();
    }

    close = () => {
        this.setState({speaker: null});
        this.dialogRef.MDComponent.close();
    }

    render() {
        const speaker = this.state.speaker || {};

        return (
            <Dialog ref={this.createDialogRef} onCancel={this.close}>
                <header class={style.header}>
                    <IconButton class={style.back} onClick={() => this.close()}>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" fill="#444" />
                        </svg>
                    </IconButton>

                    <img src={speaker.photo} alt={speaker.name} />

                    <h2>{speaker.name}</h2>
                    <h3>{speaker.position}, {speaker.company}</h3>
                </header>

                <main class={style.content}>
                    <p>{speaker.bio}</p>
                </main>
            </Dialog>
        );
    }
}

export default SpeakerDetail;
