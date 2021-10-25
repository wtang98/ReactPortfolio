import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {

    const [state, handleSubmit] = useForm("xeqvwvzn");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
