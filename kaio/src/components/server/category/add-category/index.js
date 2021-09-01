import { useForm } from "react-hook-form";
import { CallAPI } from "../../../../until";
const CreateCategory = () => {
    const { register, handleSubmit  } = useForm();
   
   const create=(data)=>{
        return CallAPI.create('categories', data);
   }
    const onHandleSubmit = async (data)=>{
        try {
           let response = await create(data);
           console.log(response)
        } catch (error) {
             return error;
        }
    }
    return (
        <div className="container mx-auto  flex justify-center">
            {/* <h1 className="font-bold text-5xl " style={{color:'orange',border:'1px solid green'}}>Add Product</h1> */}
             <div className="w-[400px]">
                 <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="productname" className="form-label">Name product</label>
                            <input type="text" name="name"  className="form-control" {...register("name",{required: true, maxLength: 100, minLength:1})}  />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateCategory
