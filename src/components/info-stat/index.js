import { Component } from 'preact';
import style from './style';

export default class InfoStat extends Component {
    render(props) {
        return (
            <div>
                <p class={style.value}>{props.value}</p>
                <label>{props.label}</label>
            </div>
        );
    }
}
