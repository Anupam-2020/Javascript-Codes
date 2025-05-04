import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const STATE = {
    SUCCESS:'success',
    LOADING: 'loading',
    ERROR: 'error'
}

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState();
    const [input, setInput] = useState(data);
    const cacheRef = useRef({});


    async function getData(signal) {
        try {
            setStatus(STATE.LOADING);
            if(cacheRef.current[input]) {
                console.log('Retrive from cache');
                setData(cacheRef.current[input]);
                setStatus(STATE.SUCCESS);
                return;
            }
            let data = await fetch(`https://dummyjson.com/products/search?q=${input}`,
                {signal}
            );
            let json = await data.json();
            console.log('API Call');
            setData(json.products);
            setStatus(STATE.SUCCESS);
            cacheRef.current[input] = json.products;
        } catch (error) {
            setStatus(STATE.ERROR)
            console.log(error);
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        const {signal} = abortController;
        let id = setTimeout(() => {
            getData(signal);
        }, 500)

        return () => {
            clearTimeout(id)
            abortController.abort();
        }
    },[input]);


  return (
    <div>
        <input type='text' placeholder='search' value={input} onChange={(e) => setInput(e.target.value)}/>
        {status === 'loading' && <div>{status}</div>}
        {status === 'success' && <ul>
            {data && data.map(product => {
                return (
                    <li key={product.id}>
                        {product.title}
                    </li>
                )
            })}
        </ul>}
        {status === 'error' && <div>{status}</div>}
    </div>
  )
}

export default SearchBar;