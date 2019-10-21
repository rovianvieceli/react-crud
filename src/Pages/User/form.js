import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const template = props => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" component="input" name="name" />

            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" component="input" name="email" />
        </form>
    )
}

const Form = (reduxForm({
    form: 'formUser'
}))(template)


const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Form)
