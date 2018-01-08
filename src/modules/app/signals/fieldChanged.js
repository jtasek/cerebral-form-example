import { state, props } from 'cerebral/tags'
import { setField } from '@cerebral/forms/operators'

export default [setField(state`userForm.${props`field`}`, props`value`)]
