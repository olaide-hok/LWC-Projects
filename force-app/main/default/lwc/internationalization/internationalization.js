import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/local'
import CURRENCY from '@salesforce/i18n/currency'
import DIR from '@salesforce/i18n/dir'

export default class Internationalization extends LightningElement {
    dir = DIR
    number = 5439340.98
    formattedNumber = new Intl.NumberFormat(LOCALE, {
        style: 'currency',
        currency: CURRENCY,
        currencyDisplay: 'symbol'
    }).format(this.number)
}