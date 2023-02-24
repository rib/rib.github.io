
class Greedy {
    constructor() {
        this.element = document.querySelectorAll('.greedy-nav')
        this.numOfItems = 0
        this.totalSpace = 0
        this.breakWidths = []
        this.availableSpace = null
        this.numOfVisibleItems = null
        this.requiredSpace = null
    }
    init() {
        ;[].forEach.call(this.element, el => {
            ;[].forEach.call(el.querySelectorAll('li'), item => {
                this.totalSpace += item.offsetWidth
                this.numOfItems += 1
                this.breakWidths.push(this.totalSpace)
            })
            this.check(el)
            window.addEventListener('resize', () => {
                this.check(el)
            })
            el.querySelector('button').addEventListener('click', () => {
                el.querySelector('.hidden-links').classList.toggle('hidden')
            })
        })
    }
    check(element) {
        const elementItems = element.querySelector('.visible-links')
        const elementHiddenItems = element.querySelector('.hidden-links')
        const elementButton = element.querySelector('button')
        this.availableSpace = elementItems.offsetWidth - 10
        this.numOfVisibleItems = elementItems.querySelectorAll('li').length
        this.requiredSpace = this.breakWidths[this.numOfVisibleItems - 1]

        // There is not enough space
        if (this.requiredSpace > this.availableSpace) {
            elementHiddenItems.prepend(elementItems.lastChild)
            this.numOfVisibleItems -= 1
            this.check(element)
        // There is more than enough space
        } else if (this.availableSpace > this.breakWidths[this.numOfVisibleItems]) {
            elementItems.append(elementHiddenItems.firstChild)
            this.numOfVisibleItems += 1
        }
        // Update the button accordingly
        elementButton.setAttribute('count', this.numOfItems - this.numOfVisibleItems)
        this.numOfVisibleItems === this.numOfItems
        ? elementButton.classList.add('hidden')
        : elementButton.classList.remove('hidden')
    }
}

const greedy = new Greedy()
greedy.init()
