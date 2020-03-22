import React, { useEffect, useState } from 'react'

function Item({ match }) {
    const [itemName, setItemName] = useState([]);

    useEffect(() => {
        fetchItem();
        console.log("In the Match :", match.params.id)

    }, [])

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`)
        const data = await fetchItem.json();
        const val = data.map(i => i.title)

        console.log("Data ..:", val)
        // const res = data.error.message
        setItemName(val)
        //console.log(typeof itemName)
    }

    return (
        <div className="row d-flex justify-content-center align-items-center mt-3">

            <div className="col-sm-4" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                <h3 className="text-center" style={{ borderBottom: "1px dashed #e2e0e0" }}>User Details</h3>

                {itemName.map((title, i) => <small key={i}>{title}</small>)}
            </div>



        </div>
    )
}

export default Item
