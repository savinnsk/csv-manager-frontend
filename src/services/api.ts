import axios from 'axios';

export const sendFileService = async (formData : FormData)=>{
    try {
      const response = await axios.post('http://18.232.117.181:3000/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }})


    return response

  } catch(error : any){
    return error
  }
}

export const searchColumnsService = async (column : string)=>{
  try {
    const response = await axios.get(`http://18.232.117.181:3000/api/users?q=${column}`, {
      headers: {
        'Content-Type': 'application/json'
      }})



  return response

} catch(error : any){
  
  return error
}
}