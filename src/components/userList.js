import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

const User = ({ firstName, lastName }) => (
    <li>
        First name: {firstName}, Last name: {lastName}
    </li>
)

export default connect(
    {
        users: state`users`
    },
    ({ users }) => (
        <ul>{users.map(user => <User key={user.lastName} {...user} />)}</ul>
    )
)
