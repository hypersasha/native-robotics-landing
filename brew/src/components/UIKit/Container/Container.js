import React, {Component} from 'react';

import './container.less';

class Container extends Component {
    render() {
        return (
            <div className={'nr-container'}>
                {this.props.children}
            </div>
        )
    }
}

export default Container;