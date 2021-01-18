module.exports = {
    get: (key, initial) => {
        const savedData = JSON.parse(localStorage.getItem(key));
        if (savedData !== null) {
            return savedData;
        }
        if (initial instanceof Function) return initial();
        return initial; //in case it's not a function, but there is an initial value in there
        //for instance, RoomContext makes use of a function to initialize, but MoneyContext starts off with a set
        //$500
    },
    set: (key, value) => {
        localStorage.setItem(key, value)
    }
}

