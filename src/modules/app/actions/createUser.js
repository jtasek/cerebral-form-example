export default ({ forms, state }) => {
    const form = forms.get('userForm')
    state.push('users', {
        firstName: form.firstName.value,
        lastName: form.lastName.value
    })
}
