import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './example.less';
import UnityPrefabIcon from "../../../assets/imgs/UnityPrefabIcon.png";
import Prefab from "./Prefab";

class Example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="st-example">
                <div className="st-example--content">
                    <div className="st-example--content-preview">
                        {this.props.children || 'No Preview specified.'}
                        {this.props.description &&
                        <div className="preview-title">
                            {this.props.description}
                        </div>
                        }
                    </div>
                    <div className="st-example--content-prefabs">
                        <h2 className={'content-prefabs-title'}>Unity Prefab Structure</h2>
                        <div className="prefabs-list">
                            {this.props.prefabsList}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Example.propTypes = {
    description: PropTypes.string,
    prefabsList: PropTypes.element
};

export default Example;