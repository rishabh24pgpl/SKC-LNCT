import { api } from "@/app/lib/middleware/apiInceptor"
import { ADDMISSONS } from ".."

export const getAllAdmissions =async(payload) =>{
 let res = await api.get(ADDMISSONS)
 if(res){
    return res.data.payload
 }
 else{
    res.error ='error'
 }
}
export const addAdmissionQuery =async(payload)=>{
   return await api.post(ADDMISSONS, payload)
}