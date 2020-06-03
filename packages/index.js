import Button from './button';
import Dialog from './dialog';
import './fonts/iconfont.css';

const components = [
    Button,
    Dialog
];
const install = function (Vue) {
    components.forEach(item => {
        Vue.component(item.name, item);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {install};