import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'Habeeb Kareem'
    company = 'merkle'

    @track address= {
        city: 'Lagos',
        country: 'Nigeria',
        postalCode: 123654
    }

    handleChange (event) {
        this.company = event.target.value
    }

    handleTrackChange (event) {
        this.address.city = event.target.value
    }

    // Getter example
    users = ['john', 'smith', 'albert']
    num1 = 19
    num2 = 20

    get firstUser () {
        return this.users[0]
    }

    get multiply () {
        return this.num1 * this.num2
    }

}