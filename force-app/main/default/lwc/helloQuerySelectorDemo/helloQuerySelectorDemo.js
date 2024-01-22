import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ['John', 'Smith', 'Albert', 'Jim']
    fetchDetailsHandler () {
        const elem = this.template.querySelector('p')
        // console.log('elem', elem.innerText)
        const userElements = this.template.querySelectorAll('.name')
        // console.log('uE',userElements)
        // console.log('typeof UE', typeof userElements)
        // console.log(Array.from(userElements))
        // console.log(typeof Array.from(userElements))

        Array.from(userElements).forEach(item => {
            // console.log(item.innerText)
            item.setAttribute('title', item.innerText)
        })

        // lwc:dom='manual' demo
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>Hey i am a child element inserted using JavaScript!</p>'
    }
}