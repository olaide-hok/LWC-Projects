import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselDetails = [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First Card",
            description: "First card description.",
            altText: "First card accessible description.",
            href: "https://www.example.com"
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
            altText : "Second card accessible description.",
            href : "https://www.example.com"
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            altText : "Third card accessible description.",
            href : "https://www.example.com"
        }
    ]

    percentage = 10
    changeHandler(event) {
        this.percentage = event.target.value
    }
}