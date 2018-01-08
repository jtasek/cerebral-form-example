import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import { form } from '@cerebral/forms'
import styles from './form.css'

export default connect(
    {
        form: form(state`userForm`),
        onChangeHandler: signal`fieldChanged`,
        onSubmitHandler: signal`formSubmitted`
    },
    ({ form, onChangeHandler, onSubmitHandler }) =>
        form.isVisible ? (
            <form
                className={styles.form}
                id="user-form"
                onSubmit={e => {
                    e.preventDefault()
                    onSubmitHandler()
                }}
            >
                <h2>{form.name}</h2>
                <label htmlFor="firstName">First name</label>
                <input
                    className={styles.input}
                    type="text"
                    name="firstName"
                    value={form.firstName.value}
                    onChange={e => {
                        e.preventDefault()
                        onChangeHandler({
                            field: e.target.name,
                            value: e.target.value
                        })
                    }}
                />
                {form.firstName.isValid ? null : (
                    <div className={styles.error}>
                        Error
                        {console.dir(form.firstName.errorMessage)}
                    </div>
                )}
                <br />
                <label htmlFor="lastName">Last name</label>
                <input
                    className={styles.input}
                    type="text"
                    name="lastName"
                    value={form.lastName.value}
                    onChange={e => {
                        e.preventDefault()
                        onChangeHandler({
                            field: e.target.name,
                            value: e.target.value
                        })
                    }}
                />
                {form.lastName.isValid ? null : (
                    <div className={styles.error}>
                        Error
                        {console.dir(form.lastName.errorMessage)}
                        {/* {form.lastName.failedRule.name} */}
                    </div>
                )}
                <input type="submit" value="Save" />
            </form>
        ) : null
    /*// Value of some field
    form.someField.value
    // A true/false if field has a value
    form.someField.hasValue
    // A true/false if field has been changed
    form.someField.isPristine
    // A true/false if field is valid
    form.someField.isValid
    // The name of the rule that failed
    form.someField.failedRule.name
    // Any arg you passed to the failing rule
    form.someField.failedRule.arg
    // If you have defined global error messages and field is invalid
    form.someField.errorMessage
    // Get all invalid fields
    form.getInvalidFields()
    // Get all fields
    form.getFields()*/
)
