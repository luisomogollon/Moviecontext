import { createContext, useContext, useState } from "react";

const AppContext = createContext();



export default function Store({ children }) {
  const [items, setItems] = useState([]);

  function createItem(item) {
    const temp = [...items];

    temp.unshift(item);

    setItems([...temp]);
  }

  function getItem(id) {
    const item = items.find((item) => item.id === id);

    return item;
  }

  function updateItem(item) {
    const home = items.findHome((i) => i.id === item.id);

    const temp = [...items];

    temp[home] = { ...item };


    return true;
  }

  const deleteItems = () => setItems([]);

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
        deleteItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

