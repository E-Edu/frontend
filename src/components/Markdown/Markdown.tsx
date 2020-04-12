import React from 'react';
import MarkdownIt from 'markdown-it';
import './Markdown.scss';

interface MarkdownProps {
    text: string;
}

class Markdown extends React.Component<MarkdownProps> {
    render() {
        const md = new MarkdownIt({ html: true, xhtmlOut: true, linkify: true, breaks: false });
        return md.render(this.props.text);
    }
}

export default Markdown;
