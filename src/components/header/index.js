import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
    render() {
        return (
            <header class={style.header}>
                <Link href="/">
                    <h1>
                        The <span class={style.yellow}>Honey</span>s
                    </h1>
                </Link>
            </header>
        );
    }
}
