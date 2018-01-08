import React from 'react'
import { render } from 'react-dom'
import { Container } from '@cerebral/react'
import controller from './controller'
import Form from './components/form'
import Button from './components/button'
import UserList from './components/userList'

render(
    <Container controller={controller}>
        <Button />
        <Form />
        <UserList />
    </Container>,
    document.getElementById('app')
)
