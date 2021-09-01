import {
    axiosClient
} from "./API/axiosClient";

export const $$ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : [...elements]
}

// export const deleted=async (table,id)=>{
//     try {
//         let response = await fetch(`http://localhost:3002/${table}/${id}`,{method:"DELETE"});
//         return response;
//     } catch (error) {
//         return error;
//     }
   

// }

export const CallAPI ={
    deleted(table, id){
        const url =`${table}/${id}`;
        return axiosClient.delete(url);
    },
    update(table, id,data){
        const url =`${table}/${id}`;
        return axiosClient.put(url,data);
    },
    create(table,data){
        const url = `${table}`;
        return axiosClient.post(url,data)
    },
    list(table){
        const url = `${table}`;
        return axiosClient.get(url)
    }
}

// export const update = async (table,id,dataUpdate)=>{
//     // console.log(table,id,dataUpdate)
  
//     try {
//         let response = await fetch(`http://localhost:3002/${table}/${id}`,{
//             method:"PUT",
//            headers:{
//             "Content-Type": "application/json"
//         },
//             data:JSON.stringify(dataUpdate)
//         });
//         return response;
//     } catch (error) {
//         return error;
//     }
// }

export const readById = async (table,id)=>{
    try {
        let response = await fetch(`http://localhost:3002/${table}/${id}`);
        return response;
    } catch (error) {
        return error;
    }
}


