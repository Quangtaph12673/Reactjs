import { useForm } from "react-hook-form";
import {useEffect} from 'react';
import storage from "../../../firebase/index";
import { useHistory } from "react-router-dom";
import { CallAPI,$$ } from "../../../../until";
export const AddProduct = () => {
  
    // const [categories, setCategories] = useState('')
    const { register, handleSubmit  } = useForm();

    const createProduct= async (dataCate)=>{
         return CallAPI.create('products', dataCate);
     }

    const addProduct = (product)=>{
         createProduct(product)
    }

    const dataCategory= async ()=>{
        let {data} = await CallAPI.list('categories');
         $$('#categories').innerHTML= data.map((element)=>{
            return `
            <option value="${element.id}">${element.name}</option>
            `;
        }).join('');
    }
    useEffect(()=>{
        dataCategory();
        // console.log(categories)
    },[])
     const history = useHistory();
    const onHandleSubmit = async (data)=>{
        // setProduct(data)
        // console.log(products)
        // console.log(data);
        let img = data.photo[0];
        let storageRef = storage.ref(`images/${img.name}`);
        await storageRef.put(data.photo[0]);
        let photo = await storageRef.getDownloadURL();
        const newData = {
                    ...data,
                    photo:photo
                }
                addProduct(newData)
                // setProduct()
                history.push('/list-product');
                // console.log(products)
           
    }
    
    return (
        <div className="container mx-auto  flex justify-center">
            {/* <h1 className="font-bold text-5xl " style={{color:'orange',border:'1px solid green'}}>Add Product</h1> */}
         <div className="w-[400px]">
         <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="productname" className="form-label">Name product</label>
                        <input type="text" name="name"  className="form-control" {...register("name",{required: true, maxLength: 100, minLength:5})}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="photo" className="form-label">Image product</label>
                        <input type="file" name="name"  className="form-control" {...register("photo",{required:true})}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc"  className="form-label">introduce</label>
                        <input type="text"  name="introduce" {...register("introduce",{required: true, maxLength:255})}  className="form-control" id="introduce" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category"  className="form-label">category</label>
                        <select name="" id="categories" className="form-control" {...register("categoryId",{required: true})}> 
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
        </form>
         </div>
        </div>
    )
}
