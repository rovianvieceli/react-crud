import React from 'react';
import { reduxForm, Field, submit } from 'redux-form';
import { connect } from 'react-redux';

import { submitUserAction } from '../../Actions/User/UserAction';

const template = props => {
    const { onSubmit } = props;

    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <form onSubmit={onSubmit((fields) => submit(fields, submitUserAction))}>
            <label htmlFor="name">Name</label>
            <Field id="name" type="text" component="input" name="name" />

            <label htmlFor="email">E-mail</label>
            <Field id="email" type="text" component="input" name="email" />

            <button type='submit'>Enviar</button>
        </form>
    )
}

const Form = (reduxForm({
    form: 'formUser'
}))(template)


const mapStateToProps = state => ({});

export default connect(mapStateToProps, submitUserAction)(Form)
