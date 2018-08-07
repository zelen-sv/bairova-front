import VueScrollTo from 'vue-scrollto'

const options = {
    easing: 'ease-in',
    container: 'body',
    offset: 1,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
}

function scroll_to_element(element, duration) {
     VueScrollTo.scrollTo(element, duration, options)
}

export default scroll_to_element
