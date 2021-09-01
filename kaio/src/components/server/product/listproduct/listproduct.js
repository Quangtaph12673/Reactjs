import { useEffect,useReducer } from "react";
import {ProductReducer} from '../../../../reducer/productReducer';
import {CALL_API,
    SUCCESS,
    ERROR} from "../../../../reducer/type";
import DeletedProduct from "./deletedProduct";
import EditProduct from "./editProduct";
import { CallAPI } from "../../../../until";

    const ListProduct = () => {
    const initialState = {
        productsDetails: [],
        loading: false,
        error: null,
    };
    
    const  [products, dispatch] = useReducer(ProductReducer,initialState)
    const { productsDetails, loading, error } = products;
    useEffect(() => {
            dispatch({
                type:CALL_API
            })
            const fetchAPI = async ()=>{
                    let response = await CallAPI.list('products');
                    if(response.status === 200){
                        dispatch({ type: SUCCESS, productsDetails:response.data });
                        return;
                    }
                    dispatch({ type: ERROR, error: response.error });
                   
             }
             fetchAPI();
            //  console.log(products);
    },[]);
          
    
    return (
        <>
        <div className="py-8 flex justify-center items-center">
            <table>
                <thead>
                    <tr>
                        <th className="border px-2 py-1">Product</th>
                        <th className="border px-2 py-1">Photo</th>
                        <th className="border px-2 py-1">Introduce</th>
                        <th colSpan={2}  className="border px-2 py-1">Other</th>
                    </tr>
                </thead>
                <tbody>
                { loading ? (<tr><td> loading...</td></tr>):error?(<tr><td>{error}</td></tr>):(
                     productsDetails.map((ele,index)=>{
                      return  <tr key={index} className={`list-table-${ele.id}`}>
                                  <td  className="border px-2 py-1">{ele.name}</td>
                                  <td  className="border px-2 py-1"><img src={ele.photo} width='100' alt="" /></td>
                                  <td  className="border px-2 py-1">{ele.introduce}</td>
                                  <td  className="border px-2 py-1"><EditProduct id={ele.id} table="products" /></td>
                                  <td className="border px-2 py-1"><DeletedProduct id={ele.id} table="products" /></td>
                             </tr>
                   })
                )}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ListProduct
