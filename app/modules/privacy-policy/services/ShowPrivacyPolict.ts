import api from "../../api/api";

async function ShowPrivacyPolicy(){
 const response = await api.get("/api/privacy-policy")
  return response.data.data
}

export default ShowPrivacyPolicy