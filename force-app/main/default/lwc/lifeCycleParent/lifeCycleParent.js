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
    // Example of instance that triggers and retriggers the connected callback lifecycle hook.
    // name
    // changeHandler(event) {
    //     this.name = event.target.value
    // }
    isChildVisible = false;
   handleClick () {
    this.isChildVisible = !this.isChildVisible
   }

   // Handles error that occurs in a child component.
   errorCallback (error, stack) {
    console.log(error)
    console.log(error.message)
    console.log(stack)
   }
}