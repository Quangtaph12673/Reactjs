import React, {useState} from 'react'
import { useForm } from "react-hook-form";

export const AddProduct = ({onAdd}) => {
    const { register, handleSubmit, errors  } = useForm();

    
    // const [fields , setFields] = useState({
    //     nameProduct: '',
    //     introduce: ''
    // });
    // const dataProduct =(e)=>{
    //    const {name, value}  = e.target
    //     setFields({
    //         ...fields,
    //         [name]:value
    //     });
    // }
    const onHandleSubmit = (data)=>{
        // console.log(data)
        onAdd(data)
        // e.preventDefault();
        // onAdd(fields);
    }
    return (
        <div className="container mx-auto ">
            <h1 className="font-bold text-5xl">Add Product</h1>
         <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="mb-3">
                    <label htmlFor="productname" className="form-label">Name product</label>
                    <input type="text" name="nameProduct"  className="form-control" {...register("nameProduct")}  aria-describedby="emailHelp" />
                    
                    </div>
                    <div className="mb-3">
                    <label htmlFor="desc"  className="form-label">introduce</label>
                    <input type="text" name="introduce" {...register("introduce")}  className="form-control" id="introduce" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
