import React, {useEffect} from 'react';
import './calculations-table.less';

export default function Calculations(props) {

    useEffect(() => {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        return () => {
            document.getElementsByTagName('body')[0].removeAttribute('style');
            document.getElementsByTagName('html')[0].removeAttribute('style');
        }
    }, [])

    function onDarkerClose(e) {
        if (e.target && e.target.className === 'calculations-table') {
            if (props.onClose && typeof props.onClose === 'function') {
                props.onClose();
            }
        }
    }

    return (
        <div className="calculations-table" onClick={onDarkerClose}>
            <div className="table-container">
                <h1>Cost reduction calculations</h1>
                <h3>'000 EUR, no VAT</h3>
                <div className="close-button" onClick={props.onClose}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.36 16.78L13.58 12l4.78-4.78c.44-.44.44-1.15 0-1.58a1.12 1.12 0 00-1.58 0L12 10.42 7.22 5.64a1.12 1.12 0 00-1.91.79c0 .29.1.57.33.8L10.42 12l-4.78 4.78a1.12 1.12 0 000 1.58c.43.44 1.14.44 1.58 0L12 13.58l4.78 4.78c.43.44 1.15.44 1.58 0 .44-.43.44-1.15 0-1.58z" fill="#FF9500" /></svg>
                </div>
                <div className="table">
                    <div className="table-row">
                        <div className="table-cell"></div>
                        <div className="table-cell">
                            <h1>UR10e<br />without OmniPack</h1>
                        </div>
                        <div className="table-cell">
                            <h1>UR10e<br />with OmniPack</h1>
                        </div>
                    </div>
                    <div className="table-row spacer">
                        <div className="table-cell">
                            <p>Palletizer lifetime, years</p>
                        </div>
                        <div className="table-cell">
                            <p>10</p>
                        </div>
                        <div className="table-cell">
                            <p>10</p>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                            <h3>Initital investments</h3>
                        </div>
                        <div className="table-cell">
                            <h4>70</h4>
                        </div>
                        <div className="table-cell">
                            <h4>72</h4>
                        </div>
                    </div>
                    <div className="table-row spacer">
                        <div className="table-cell">
                            <p>Hardware & installation</p>
                        </div>
                        <div className="table-cell">
                            <p>70</p>
                        </div>
                        <div className="table-cell">
                            <p>72</p>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                            <h3>Operational costs (per year)</h3>
                        </div>
                        <div className="table-cell">
                            <h4>6.5</h4>
                        </div>
                        <div className="table-cell">
                            <h4>1.8</h4>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                            <p>Reprogramming and reconfiguration</p>
                        </div>
                        <div className="table-cell">
                            <p>3</p>
                        </div>
                        <div className="table-cell">
                            <p>—</p>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                            <p>Robot maintenance</p>
                        </div>
                        <div className="table-cell">
                            <p>6.5</p>
                        </div>
                        <div className="table-cell">
                            <p>3</p>
                        </div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell">
                            <p>Other equipment maintenance</p>
                        </div>
                        <div className="table-cell">
                            <p>5</p>
                        </div>
                        <div className="table-cell">
                            <p>4</p>
                        </div>
                    </div>
                    <div className="table-row spacer">
                        <div className="table-cell">
                            <p>Power supply</p>
                        </div>
                        <div className="table-cell">
                            <p>0.5</p>
                        </div>
                        <div className="table-cell">
                            <p>0.3</p>
                        </div>
                    </div>
                    <div className="table-row spacer">
                        <div className="table-cell">
                            <p>Operational costs during lifetime</p>
                        </div>
                        <div className="table-cell">
                            <p>14</p>
                        </div>
                        <div className="table-cell">
                            <p>7.3</p>
                        </div>
                    </div>
                    <div className="table-row spacer">
                        <div className="table-cell">
                            <h2>Total investments</h2>
                        </div>
                        <div className="table-cell">
                            <h2>~200</h2>
                        </div>
                        <div className="table-cell">
                            <h2>~140</h2>
                        </div>
                    </div>
                    <div>
                        <div className="table-row">
                            <div className="table-cell">
                                <h2>Your value</h2>
                            </div>
                            <div className="table-cell">
                                <h2></h2>
                            </div>
                            <div className="table-cell">
                                <h2></h2>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell">
                                <p>Savings, EUR</p>
                            </div>
                            <div className="table-cell">
                                <p></p>
                            </div>
                            <div className="table-cell">
                                <p>60</p>
                            </div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell">
                                <p>Savings, %</p>
                            </div>
                            <div className="table-cell">
                                <p></p>
                            </div>
                            <div className="table-cell">
                                <p>33%</p>
                            </div>
                        </div>
                        {/* <div className="table-row">
                            <div className="table-cell">
                                <p>Lifetime increase, years</p>
                            </div>
                            <div className="table-cell">
                                <p></p>
                            </div>
                            <div className="table-cell">
                                <p>2.1</p>
                            </div>
                        </div> */}
                        {/* <div className="table-row">
                            <div className="table-cell">
                                <p>Lifetime increase, %</p>
                            </div>
                            <div className="table-cell">
                                <p></p>
                            </div>
                            <div className="table-cell">
                                <p>30%</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}