import axios from 'axios';

export const sendFileService = async (formData : FormData)=>{
    try {
      const response = await axios.post('https://csv-manger-backend-e07cwrrha-savinnsks-projects.vercel.app/api/files', formData, {
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
    const response = await axios.get(`https://csv-manger-backend-e07cwrrha-savinnsks-projects.vercel.app/api/users?q=${column}`, {
      headers: {
        'Content-Type': 'application/json'
      }})



  return response

} catch(error : any){
  
  return error
}
}