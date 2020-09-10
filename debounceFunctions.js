const debounce = (func, delay) => {
    let event;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(event);
        event = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}
//USE THIS IN FRONT END TO PREVENT SPAMMING BACKEND QUERIES