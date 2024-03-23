import axios from 'axios';

export const sendFileService = async (formData : FormData)=>{
    try {
      const response = await axios.post('https://savinnsk.savinnsk.com/api/files', formData, {
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
    const response = await axios.get(`https://savinnsk.savinnsk.com/api/users?q=${column}`, {
      headers: {
        'Content-Type': 'application/json'
      }})



  return response

} catch(error : any){
  
  return error
}
}