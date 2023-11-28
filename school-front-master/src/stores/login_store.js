// NO SE ESTA USANDO
import axios from "axios";

function handleResponse(response) {
  return { response: response.data };
}

function postLoginUser() {
  const data = {
    usuario: "admin",
    pass: "12345",
  };

  axios
    .post("http://localhost:3000/api/v1/auth", data)
    .then((response) => {
      handleResponse(response);
      let token = handleResponse(response).response.token;

      // saved token in localstore
      localStorage.setItem("token", token);
    })
    .catch((error) => {
      return { response: error };
    });
}

export default postLoginUser;
