import React, {useState, useEffect} from 'react'
import {set, get} from '../utils/localStorage'

export const MoneyContext = React.createContext();

export default function MoneyContextProvider(props) {

    const [balance, setBalance] = useState(() => {
        return get("balance", 500);
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
