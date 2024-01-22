import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor() {
        super();
        console.log('parent constructor called!')
    }
    connectedCallback() {
        console.log('parent connected callback called!')
    }
    renderedCallback() {
        console.log('parent rendered callback called!')
    }
    name
    changeHandler(event) {
        this.name = event.target.value
    }
}