import { Module } from 'cerebral'
import FormsProvider from '@cerebral/forms'
import data from './state'
import fieldChanged from './signals/fieldChanged'
import dialogToggled from './signals/dialogToggled'
import formSubmitted from './signals/formSubmitted'

export default Module({
    state: data,
    signals: {
        fieldChanged,
        dialogToggled,
        formSubmitted
    },
    providers: {
        forms: FormsProvider()
    }
})
