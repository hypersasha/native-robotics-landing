import React, {Component} from 'react';

import './section-caption.less';

class SectionCaption extends Component {
    render() {
        return (
            <div className={'section-caption'}>
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}

export default SectionCaption;