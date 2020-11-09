import React, {useState} from 'react';

import axios from "axios";

import './contact-form.less'

const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [description, setDescription] = useState("");

    const [isNameValid, setIsNameValid] = useState(true);
    const [isMailValid, setIsMailValid] = useState(true);

    const [sending, setSending] = useState(false);
    const [formSent, setFormSent] = useState(false);

    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function submitForm() {
        if (name.trim().length > 0 && validateEmail(mail)) {

            setSending(true);

            const user_name = name.trim();
            const desc = description.trim();

            // Send email
            if (name !== 'Avo Cado') {
                axios.post('https://nr-form-api-test.now.sh/opackDemo', {
                        name: user_name,
                        email: mail,
                        description: desc
                    }
                ).then((response) => {
                    console.log(response);

                    setSending(false);
                    setFormSent(true);
                }).catch((err) => {
                    console.error(err);

                    setSending(false);
                });
            }

            // Send bot notification
            axios.post('https://cado.starcat.now.sh/api/ofit', {
                name: user_name,
                email: mail,
                description: desc,
                product: 'OmniPack'
            }, {
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            }).then(response => {
                if (response.status === 200) {
                    console.log('Bot will send notificatoins');
                    console.log(response);
                } else {
                    console.error('Something went wrong on sending notifications.');
                }
            });

        } else {
            setIsNameValid(name.trim().length > 0);
            setIsMailValid(validateEmail(mail));
        }
    }

    return(
        <section className={"contact-form" + (formSent ? ' sent' : '')}>
            <div className="form-container" id="form">
                <h1 className="form-title">{!formSent ? "Free demo." : "Thank you."}</h1>
                <p className="form-text">
                    {!formSent ? "We will be happy to meet you online, showcase our solutions and perform remote demo even on your robot." : "We will contact you as soon as possible."}</p>
                {!formSent &&
                <div className="form-inputs">
                    <div className={"input" + (isNameValid ? '' : ' error')}>
                        <span>Name</span>
                        <input type="text" onBlur={() => {setIsNameValid(name.trim().length > 0)}} name={'name'} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={"input" + (isMailValid ? '' : ' error')}>
                        <span>E-mail</span>
                        <input type="text" onBlur={() => {setIsMailValid(validateEmail(mail))}} name={'mail'} value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>
                    <div className="input">
                        <span>Tell us about your company (optional)</span>
                        <textarea name={'description'} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </div>
                }
                {!formSent && <div className="form-button" onClick={submitForm}>
                    {!sending && <span>Contact me</span>}
                    {sending && <div className="button-loader">
                        <div className="first" />
                        <div className="second" />
                        <div className="third" />
                    </div>}
                </div>}
            </div>
        </section>
    )
};

export default ContactForm;