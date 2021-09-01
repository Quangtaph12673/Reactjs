import {readById,CallAPI} from "../../../../until";
import storage from "../../../firebase/index";
import { useForm } from "react-hook-form";
import {useEffect,useReducer} from "react";
import {ProductReducer} from '../../../../reducer/productReducer';
import {CALL_API,
    SUCCESS,
    ERROR} from "../../../../reducer/type";
import LoadingIcon from "../../../loading/loading";


const EditPage = (props) => {
    const {id,table} ={
        id : props.location.pathname.split('/')[2],
        table : 'products'
    }
    const { register, handleSubmit  } = useForm();
    const initialState = {
            productsDetails: '',
            loading: false,
            error: null,
    };
    
    const  [products, dispatch] = useReducer(ProductReducer,initialState);
    const { productsDetails, loading, error } = products;
   
    
    useEffect(() => {
        dispatch({
            type:CALL_API
        })
        const fetchAPI = async ()=>{
            let response = await readById(table,id)
          
            if(response.status === 200){
                let data = await response.json();
                dispatch({ type: SUCCESS, productsDetails:data });
                return;
            }
            dispatch({ type: ERROR, error: response.error });
        }
            fetchAPI();
            
    },[])

    
   
    const onHandleSubmit= async (data)=>{
        const {photo}=data;
        if(photo.length===1){
            //true new image 
           
           try {
                let img = photo[0];
                let storageRef = storage.ref(`images/${img.name}`);
                await storageRef.put(data.photo[0]);
                let photoNew = await storageRef.getDownloadURL();
                const newData= await {
                ...data,
                photo:photoNew
                }
                // console.log(newData)
               let response = await CallAPI.update(table,id,newData);
               console.log(response);
           } catch (error) {
               
           }
           return;
        }
        const newData ={
            ...data,
            photo:productsDetails.photo
        }
        try {
            let response = await CallAPI.update(table,id,newData);
            console.log(response);
        } catch (error) {
            
        }
        
    }
    return (
        <div>
            <div> { loading ? (<LoadingIcon />) :error?(<p>{error}</p>):
                <div className="container mx-auto  flex justify-center">
                {/* <h1 className="font-bold text-5xl " style={{color:'orange',border:'1px solid green'}}>Add Product</h1> */}
                    <div className="w-[400px]">
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                    {/* {...register("name",{required: true, maxLength: 100, minLength:5})} */}
                                <div >
                                    <label className="form-label">Name product</label>
                                    <input type="text" name="name" className="form-control" {...register("name",{required: false, maxLength: 100, minLength:5,value:productsDetails.name})}  />
                                </div>
                                <div className="mb-3">
                                   
                                    <label htmlFor="photo" className="form-label">Image product</label>
                                    <img src={productsDetails.photo} alt="" width='100' id="photoOld"  />
                                    <input type="file" name="name"  className="form-control" {...register("photo",{required:false})}  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc"  className="form-label">introduce</label>
                                    <input type="text"   name="introduceNew" {...register("introduce",{required: true, maxLength:255,  value : productsDetails.introduce})}  className="form-control" id="introduce" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    </div>
                }
            </div>
        </div>
    )
}


export default EditPage
