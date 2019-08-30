import React from "react"

function Product(props){
    return(
        <div>
            <h2 className="navbar">{props.xyz.name}</h2>
            <p>{props.xyz.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <p>{props.xyz.description}</p>
        </div>
    )
}

export default Product 