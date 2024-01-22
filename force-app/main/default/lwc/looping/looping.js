import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carsList = ['Ford', 'Audi', 'Maserrati', 'Hyundai', 'Honda', 'Mercedes', 'BMW']

    // Iterator Loop
    ceosList = [
        {
            id: 1,
            company: 'Alphabet',
            name: 'Sundar Pichai'
        },
        {
            id: 2,
            company: 'Apple Inc',
            name: 'Tim Cook'
        },
        {
            id: 3,
            company: 'Meta',
            name: 'Mark Zuckerberg'
        },
        {
            id: 4,
            company: 'Amazon Inc',
            name: 'Jeff Bezos'
        },
        {
            id: 5,
            company: 'Alibaba Group',
            name: 'Eddie Wu'
        },
    ]
}