// import './App.css';
// import { useSelector, useDispatch } from 'react-redux';
//
// function App() {
//     const count = useSelector((state) => state.count);
//     const show = useSelector((state) => state.show);
//     const dispatch = useDispatch();
//
//     return (
//         <>
//             <h1>{count && show}</h1>
//             <button onClick={() => dispatch({ type:'INCREMENT',payload:1})}>Increment</button>
//             <button onClick={() => dispatch({ type:'DECREMENT',payload:1})}>Decrement</button>
//             <button onClick={() => dispatch({type: 'TOGGLE'})}>Toggle</button>
//         </>
//     );
// }
//
// export default App;


import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
    const customerName = useSelector((state) => state.customer.customerName);
    const itemName = useSelector((state) => state.item.itemName);
    const dispatch = useDispatch();

    const [customerInput, setCustomerInput] = useState('');
    const [itemInput, setItemInput] = useState('');

    const handleAddCustomer = () => {
        dispatch({ type: 'SET_CUSTOMER', payload: customerInput });
        setCustomerInput('');
    };

    const handleAddItem = () => {
        dispatch({ type: 'SET_ITEM', payload: itemInput });
        setItemInput('');
    };

    return (
        <>
            <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
            <input
                name="customerName"
                type="text"
                placeholder="Enter Customer Name"
                className="w-full border border-gray-300 rounded p-2"
                value={customerInput}
                onChange={(e) => setCustomerInput(e.target.value)}
            />
            <button
                onClick={handleAddCustomer}
                className="bg-blue-500 text-white p-2 rounded mt-2"
            >
                Add Customer
            </button>
            <br />

            <label htmlFor="itemName" className="block text-gray-700">Item Name</label>
            <input
                name="itemName"
                type="text"
                placeholder="Enter Item Name"
                className="w-full border border-gray-300 rounded p-2"
                value={itemInput}
                onChange={(e) => setItemInput(e.target.value)}
            />
            <button
                onClick={handleAddItem}
                className="bg-green-500 text-white p-2 rounded mt-2"
            >
                Add Item
            </button>
            <br />

            <h4 className="mt-4">Customer: {customerName} | Item: {itemName}</h4>
        </>
    );
}

export default App;
