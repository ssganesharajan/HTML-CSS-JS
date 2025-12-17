function ProductCard({name,price,rating}){
    return(
        <div style={{
            border:"1px solid #ccc",
            padding:"10px",
            margin:"10px",
            width:"200px",
            borderRadius:"8px"
        }}>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>Rating: {rating}</p>
        </div>
    );
}

export default ProductCard;

//put file in src