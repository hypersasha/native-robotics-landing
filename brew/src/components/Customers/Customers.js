import React from 'react';

import './customers.less';

// Logos

const logos = {
    inser_robotica: {
        width: 200,
        url: require('../../assets/imgs/logos/inser-robotica.jpg')
    },
    cfz: {
        width: 124,
        url: require('../../assets/imgs/logos/cfz.jpg')
    },
    elektres: {
        width: 176,
        url: require('../../assets/imgs/logos/elektres.jpg')
    },
    robot_plus: {
        width:134,
        url: require('../../assets/imgs/logos/robot-plus.jpg')
    },
    epl: {
        width:149,
        url: require('../../assets/imgs/logos/epl.jpg')
    },
    imperietek: {
        width: 195,
        url: require('../../assets/imgs/logos/imperietek.jpg')
    },
    eis: {
        width: 200,
        url: require('../../assets/imgs/logos/eis.jpg')
    },
    iruna: {
        width: 104,
        url: require('../../assets/imgs/logos/iruna.jpg')
    },
    vico: {
        width: 197,
        url: require('../../assets/imgs/logos/vico.jpg')
    },
    procobot: {
        width: 170,
        url: require('../../assets/imgs/logos/procobot.jpg')
    },
    fluitronic: {
        width: 146,
        url: require('../../assets/imgs/logos/fluitronic.jpg')
    },
    sea: {
        width: 110,
        url: require('../../assets/imgs/logos/sea.jpg')
    },
    pst: {
        width: 138,
        url: require('../../assets/imgs/logos/psts.jpg')
    },
    technicon: {
        width: 138,
        url: require('../../assets/imgs/logos/technicon.jpg')
    },
    techvitas: {
        width: 164,
        url: require('../../assets/imgs/logos/techvitas.png')
    },
    incite: {
        width: 113,
        url: require('../../assets/imgs/logos/InCiteRobotics.png')
    }
}

const Customers = () => {
    let rows = [];
    let row = [];
    let row_key = "row-";
    for (let logo in logos) {
        row.push(
            <div className="customer-logo" key={logo}>
                <img src={logos[logo].url} width={logos[logo].width} alt={logo} />
            </div>
        );
        row_key += logo;
        // if (row.length === 4) {
        //     rows.push(
        //         <div className="customers-logos--row" key={row_key}>
        //             {row}
        //         </div>
        //     );
        //     row = [];
        //     row_key = "row-";
        // }
    }

    rows.push(
        <div className="customers-logos--row" key={row_key}>
            {row}
        </div>
    );

    return(
        <div className="customers-logos">
            {rows}
        </div>
    )
}

export default Customers;