module.exports = {
    get: (key, initial) => {
        const savedData = JSON.parse(localStorage.getItem(key));
        if (savedData !== undefined && savedData !== null) {
            return savedData;
        }
        return initial;
    },
    set: (key, value) => {
        localStorage.setItem(key, value)
    }
}