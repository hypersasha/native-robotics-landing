import React, {Component} from 'react';

import './group.less';

class Group extends Component {
    render() {
        return (
            <div className={'nr-group'}>
                {this.props.children}
            </div>
        )
    }
}

export default Group;