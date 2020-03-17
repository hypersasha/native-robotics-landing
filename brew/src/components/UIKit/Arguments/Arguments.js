import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './arguments.less';

class Arguments extends Component {

    render() {
        const {rows, ...restProps} = this.props;

        let trs = rows.map((row) => {
            return <tr key={Math.random() * 10000000}>
                <td>{row.arg}</td>
                <td>{row.type}</td>
                <td>{row.desc}</td>
            </tr>
        });

        return (
            <div className="st-arguments">
                <table cellPadding={0} cellSpacing={0}>
                    <tbody>
                    <tr>
                        <th>Argument</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                    {trs}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Arguments;