import { resetForm } from '@cerebral/forms/operators'

export default ({ forms, state }) => {
    resetForm(state`userForm`)
}
