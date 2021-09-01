import { useHistory } from "react-router-dom";
const EditProduct = (props) => {
    const {id,table} = props;
    const history = useHistory();
    return (
        <div>
                <button type="button" id={id} table={table} onClick={() =>{history.push(`/edit-product/${id}`)}}className="btn btn-info">edit</button>
        </div>
    )
}

export default EditProduct
