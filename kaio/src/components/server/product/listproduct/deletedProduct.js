
import {CallAPI,$$} from '../../../../until'
const deletedBtn = (id,table)=>{
    const question = window.confirm('Are you sure you want to delete');
    if(!question) return;
    CallAPI.deleted(table,id).then((data=> {
        if(data.status === 200) $$(`.list-table-${id}`).remove();
        return;
    }))
}

const DeletedProduct = (props) => {
    const {id, table}= props;
    return (
        <div>
               <button type="button" onClick={()=>deletedBtn(id,table)}   className="btn btn-danger">remove</button>
        </div>
    )
}

export default DeletedProduct
