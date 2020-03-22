import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchApi();

    }, [])

    const fetchApi = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const items = await data.json();
        console.log(items)
        // const values = items.data
        // const value = await values.map(v => v.item)
        // const item = await value.map(eachItem => eachItem.name)
        //console.log(value)
        setItems(items)
    }

    return (
        <div className="row d-flex justify-content-center align-items-center mt-3">

            <div className="col-sm-4" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>Some Random Routes</h3>

                {items.map((v) => <div key={v.id}>
                    <Link to={`/home/${v.userId}`}><small > {v.title}</small></Link>
                </div>)}
            </div>



        </div>
    )
}

export default Home
