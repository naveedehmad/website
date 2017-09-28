import React from 'react';

export default class Admin extends React.Component {
    loadFile(type, src) {
        const remoteFile = `https://unpkg.com/netlify-cms@~0.4/dist/${src}`;
        console.log(type, src);
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

    componentDidMount() {
        this.loadCMS();
        const gatsby = document.getElementById('___gatsby');
        gatsby.parentNode.removeChild(gatsby);
    }

    render() {
        return (
            <div />
        )
    }
}
