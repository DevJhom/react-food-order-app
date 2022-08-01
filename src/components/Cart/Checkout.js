import {useRef, useState} from 'react';

import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';

const Checkout = props => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        address: true,
        phone: true,
    });

    const nameInputRef = useRef();
    const addresssInputRef = useRef();
    const phoneInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();

        const enteredName  = nameInputRef.current.value;
        const enteredAddress  = addresssInputRef.current.value;
        const enteredPhone  = phoneInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredPhoneIsValid = !isEmpty(enteredPhone);

        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            phone: enteredPhoneIsValid
        });

        const formIsValid = enteredNameIsValid && enteredAddressIsValid && enteredPhoneIsValid;

        if(!formIsValid) {
            return;
        }

        //Submit cart data here
    };

    const classesForNameInput = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid }`;
    const classesForAddressInput = `${classes.control} ${formInputsValidity.address ? '' : classes.invalid }`;
    const classesForPhoneInput = `${classes.control} ${formInputsValidity.phone ? '' : classes.invalid }`;

    return(
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classesForNameInput}>
                <label htmlFor='name'>Your Name</label>
                <input id='name' type='text' ref={nameInputRef}></input>
                {!formInputsValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div className={classesForAddressInput}>
                <label htmlFor='address'>Address</label>
                <input id='address' type='text' ref={addresssInputRef}></input>
                {!formInputsValidity.address && <p>Please enter a valid address</p>}
            </div>
            <div className={classesForPhoneInput}>
                <label htmlFor='phone'>Phone number</label>
                <input id='phone' type='text' ref={phoneInputRef}></input>
                {!formInputsValidity.phone && <p>Please enter a valid phone number</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
};

export default Checkout;