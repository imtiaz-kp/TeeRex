
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const getItems = async ()=>{
      return await commonAPI("GET",`${serverURL}/items`,"","")
}



 