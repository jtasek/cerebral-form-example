import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect(
    {
        isVisible: state`userForm.isVisible`,
        onClickHandler: signal`dialogToggled`
    },
    ({ title, isVisible, onClickHandler }) =>
        !isVisible ? (
            <input
                type="button"
                value="Create User"
                onClick={e => {
                    onClickHandler()
                }}
            />
        ) : null
)
