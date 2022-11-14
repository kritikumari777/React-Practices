export default function Product() {

    const products = ["Laptope", "Phone", "Moble"]

    return (products.map((product, index) =>
        <h6 key={index}> item {index}: {product}</h6>
    ))  // key={index} unequly defind the value

    /*
    const products = [
        { id: 1, name: "Laptope", price: 500 },
        { id: 2, name: "Phone", price: 5002 },
        { id: 3, name: "Mobile", price: 5003 },
        { id: 4, name: "Laptope", price: 5004 }
    ]
    return (
        <div>
            {products.map((product) =>
                <h6 key={product.id}>
                    item id {product.id} :{product.name}: {product.price}</h6>)}
        </div>
    )
    */
}