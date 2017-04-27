/**
 * Created by bcuser on 4/24/17.
 */
import React, {Component} from 'react';

import '../App.css';

class Address extends Component {

    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            // street: address.street,
            // city: address.city,
            // state: address.state,
            // zip: address.zip,
            // phone: address.phone,
            // website: address.website
        }
    }


    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            firstName: address.firstName,
            lastName: address.lastName,
            // street: address.street,
            // city: address.city,
            // state: address.state,
            // zip: address.zip,
            // phone: address.phone,
            // website: address.website
        })
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    firstName: {this.state.firstName}
                </p>
                <p className="App-intro">
                    lastName: {this.state.lastName}
                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>

            </div>
        );
    }
}

export default Address;