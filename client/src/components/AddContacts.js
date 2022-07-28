import React, { Component } from 'react';

export default class AddContacts extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
       // this.focusTextInput = this.focusTextInput.bind(this);
      }

    submitContact(event) {
        event.preventDefault();
        this.firstName.current.focus();
        this.lastName.current.focus();
        this.email.current.focus();
        console.log(this.firstName);
        let contact = {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email: this.email.current.value,
        }

        fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contact),
        })
        .then(response => response.json());

        window.location.reload();
    }


    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitContact.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" ref={this.firstName} type="text" className="validate" />
                    <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input ref={this.lastName} type="text" className="validate" />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input ref={this.email} type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}