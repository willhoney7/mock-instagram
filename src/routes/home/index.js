import { h, Component } from 'preact';
import style from './style';

import Post from '../../components/post';

import posts from '../../data/posts.json';

export default class Home extends Component {
    render() {
        return <div class={style.home}>{posts.slice(0, 11).map(p => <Post {...p} />)}</div>;
    }
}
