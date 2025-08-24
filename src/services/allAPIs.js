import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//add recipee
export const addRecipeeAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverURL}/recipees`,reqBody)
}
//get recipees

export const getRecipeeAPI=async()=>{
    return await commonAPI('get',`${serverURL}/recipees`,"")
}

//update recipee

export const updateRecipeeAPI=async(id,reqbody)=>{
    return await commonAPI('put',`${serverURL}/recipees/${id}`,reqbody)
}

//delete recipee


export const deleteRecipeeAPI=async(id)=>{
    return await commonAPI('delete',`${serverURL}/recipees/${id}`,"")
}