import { path } from "./constants"

const getData = async () => {
    try {
      const response = await fetch(path.API_URL)
      const data = await response.json()

      return data
    } 
    catch (error) {
      console.log(error)
    }
  }

export { getData }

