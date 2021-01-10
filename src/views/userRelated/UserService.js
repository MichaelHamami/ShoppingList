import axios from "axios";

const ALL_USERS_GET_API_URL =
  "http://localhost:8084/dts/admin/users/adminTempSpace/adminTempEmail";

const GET_SPECIFIC_USER_API_URL = "http://localhost:8084/dts/user/login/";

const NEW_USER_URL = "http://localhost:8084/dts/users";

const OUR_SPACE = "2021a.eli.bunimovich/";

class UserService {
  getAllUsers() {
    return axios.get(ALL_USERS_GET_API_URL);
  }

  getSingleUser(id) {
    return axios.get(GET_SPECIFIC_USER_API_URL + OUR_SPACE + id);
  }

  newUser(userDetails) {
    axios
      .post(NEW_USER_URL, userDetails)
      .then(function (response) {
        alert("user added");
        console.log(response);
      })
      .catch(function (error) {
        alert("failed to add user" + error);
        console.log(error);
      });
  }
}

export default new UserService();
