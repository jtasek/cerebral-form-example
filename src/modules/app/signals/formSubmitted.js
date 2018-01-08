import { isValidForm } from '@cerebral/forms/operators'
import { state } from 'cerebral/tags'
import createUser from '../actions/createUser'
import resetForm from '../actions/resetForm'
import toggleDialog from '../actions/toggleDialog'

export default [
    isValidForm(state`userForm`),
    {
        true: [
            () => console.log('success'),
            // push new user
            createUser,
            // close form
            toggleDialog
            // reset form
            //resetForm
        ],
        false: [
            // show error
            () => console.log('error')
        ]
    }
]
