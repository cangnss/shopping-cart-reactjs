import React,{useState} from 'react'

function Product({ product, addPiece, deletePiece }) {

    const [count,setCount] = useState(0)

    const increase = () => {
        setCount(count+1)
    }
    const decrease = () => {
        setCount(count-1)
    }
    const addMultiplyFunction = () => {
        addPiece();
        increase();
    }
    const deleteMultiplyFunction = () => {
        deletePiece();
        decrease();
    }
    const minus = {
        color:'white',
        width: '35px',
        height:'35px',
        borderRadius:'15px',
        backgroundColor:'red',
        padding:'2px'
    };

    const plus = {
        color:'white',
        width: '35px',
        height:'35px',
        borderRadius:'15px',
        backgroundColor:'green',
        padding:'2px'
    };

    return (
        <div className="mt-5 ms-5 mx-auto text-center">
            <div className="card me-2" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.length > 50 ? product.description.substring(0, 30) : product.description}...</p>
                </div>
                <div className="d-flex mb-5">
                    <div className="col-4 ms-5" style={minus}>
                        <i class="fas fa-minus fa-2x" onClick={deleteMultiplyFunction}></i>
                    </div>
                    <div className="col-4 fw-bold fs-3">
                        {count}
                    </div>
                    <div className="col-4" style={plus}>
                        <i class="fas fa-plus fa-2x" onClick={addMultiplyFunction}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
