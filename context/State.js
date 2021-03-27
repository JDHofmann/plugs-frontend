import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [ cart, setCart ] = useState([]);
    const [ user, setUser ] = useState([]);
    const [ products, setProducts ] = useState([]);

    return (
        <AppContext.Provider value={ {cart: cart, setCart}}>
            { children }
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}