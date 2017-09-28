import React from 'react';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.removeHead = this.removeHead.bind(this);
    }
    loadFile(type, src) {
        const remoteFile = `https://unpkg.com/netlify-cms@~0.4/dist/${src}`;
        if (type === 'css') {
            let file = document.createElement('link');
            file.rel = 'stylesheet';
            file.type = 'text/css';
            file.href = remoteFile;
            const head = document.getElementsByTagName('head')[0];
            head.appendChild(file);
        } else {
            const cmsScript = document.createElement('script');
            cmsScript.setAttribute('src', remoteFile);
            document.body.appendChild(cmsScript);
        }
    }

    loadCMS() {
        this.loadFile('css', 'cms.css');
        this.loadFile('script', 'cms.js');
    }

    removeHead() {
        this.removeItem('material-icons', false);
        this.removeItem('material-styles', false);
    }

    removeItem(id, remove) {
        const item = document.getElementById(id);
        if (remove) {
            return item.parentNode.removeChild(item);
        }

        return item.disabled = true;
    }

    componentDidMount() {
        this.loadCMS();
        this.removeItem('___gatsby', true);
        window.addEventListener('load', this.removeHead);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.removeHead);
    }

    render() {
        return (
            <div />
        )
    }
}
