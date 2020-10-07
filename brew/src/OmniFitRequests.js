import React, {Component} from 'react';
import './omnifit.less';

import axios from 'axios';
import Title from "./components/OmniFit/Title/Title";

class OmniFitRequests extends Component {

    constructor(props) {
        super(props);

        this.state = {
            requests: []
        }
    }

    componentDidMount() {
        axios.get('https://nr-form-api-test.now.sh/allDemoRequests')
            .then((response) => {
                console.log(response);
                if (response.data) {
                    this.setState({
                        requests: response.data
                    })
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {

        const {requests} = this.state;

        let reqList = requests.map((req) => {
            return <div className="req" key={Math.random() * 10000}>
                <div className="req-name">{req.name}</div>
                <div className="req-mail">{req.email}</div>
            </div>
        });

        return(<div>
            <section>
                <div className="container">
                    <Title center={true} text={'Demo Requests'}/>
                    <p className={'section-text centered'}>
                        Here you can see all demo requests from database.
                    </p>
                    <div className="requests">
                        {reqList}
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default OmniFitRequests;
