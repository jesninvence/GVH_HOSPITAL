import axios from "axios";

function getData() {
    const cru = localStorage.getItem("cru");
    const sc = localStorage.getItem("sc");
    
    let data = new FormData();
    data.append("cru",cru);
    data.append("sc",sc);
    data.append("function","1");

    return data;
}

export const getUserType = () => {
    return axios.post("http://localhost/GVH_PHP/get_user.php",getData())
            .then(response => response.data.type_id);
}       