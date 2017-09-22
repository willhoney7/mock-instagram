import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import link from '../../assets/link.png';

const format = date =>
    new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric'
    });

export default class Header extends Component {
    state = {
        focus: false,
        focusImage: ''
    };

    listenForEscape = ev => {
        if (ev.key === 'Escape') this.closeImage();
    };
    viewImage = image => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', this.listenForEscape);
        this.setState({ focus: true, focusImage: image });
    };
    closeImage = () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', this.listenForEscape);
        this.setState({ focus: false, focusImage: '' });
    };

    render({ images = [], title, date }) {
        return (
            <div class={style.post}>
                {/* <img class={style.link} src={link} /> */}
                <h2>
                    {title || 'Post'} <small>{format(date)}</small>
                </h2>
                <div class={style.images}>
                    {images.map(image => (
                        <div class={style.image} onClick={ev => this.viewImage(image)}>
                            <img src={image.src} />
                        </div>
                    ))}
                </div>
                {this.state.focus ? (
                    <div class={style.focus}>
                        <div class={style.close} onClick={this.closeImage}>
                            &times;
                        </div>
                        <img src={this.state.focusImage.src} />
                    </div>
                ) : null}
            </div>
        );
    }
}
