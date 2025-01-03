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

function App() {
    const customerName = useSelector((state) => state.customer.customerName);
    const itemName = useSelector((state) => state.item.itemName);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Customer: {customerName} | Item: {itemName}</h1>

            <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
            <input
                name="customerName"
                type="text"
                placeholder="Enter Customer Name"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => dispatch({ type: 'SET_CUSTOMER', payload: e.target.value })}
            />
            <br />

            <label htmlFor="itemName" className="block text-gray-700">Item Name</label>
            <input
                name="itemName"
                type="text"
                placeholder="Enter Item Name"
                className="w-full border border-gray-300 rounded p-2"
                onChange={(e) => dispatch({ type: 'SET_ITEM', payload: e.target.value })}
            />
        </>
    );
}

export default App;
