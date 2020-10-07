import React, {useState, useEffect} from 'react'
import {set, get} from '../utils/localStorage'

export const MoneyContext = React.createContext(props);

export default function MoneyContextProvider() {

    const [balance, setBalance] = useState(() => {
        get("balance", 500);
    })

    useEffect(() => {
        set("balance", JSON.stringify(balance));
    }, [balance]);

    return (
        <MoneyContext.Provider value={{balance: balance, setBalance: setBalance}}>
            {props.children}
        </MoneyContext.Provider>
    )
}
