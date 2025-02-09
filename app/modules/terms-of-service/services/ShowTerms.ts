import api from "../../api/api";

async function ShowTerms(){
 const response = await api.get("/api/use-term")
  return response.data.data
}

export default ShowTerms