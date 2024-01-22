import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor() {
        super();
        console.log('child constructor called!')
    }
    interval
    connectedCallback() {
        console.log('child connected callback called!')
        // Instances that can lead to memory leaks which have to be handled in the disconnect callback lifecycle hook.
        // window.addEventListener('click', this.handleClick)
        // this.interval = window.setInterval()
        // Throws and error that is catched or handled in the parent component(s).
        throw new Error('Loading of child component failed!')
    }
    renderedCallback() {
        console.log('child rendered callback called!')
    }
    disconnectedCallback() {
        alert('Child disconnected callback called!')
        // Instances that are created in the connected callback hook which have to be handled here to prevent memory leaks.
        // window.removeEventListener('click', this.handleClick)
        // window.clearInterval(this.interval)
    }
}