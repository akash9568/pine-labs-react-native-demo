
const backend = "https://6020a98046f1e400178034c6.mockapi.io/api/v1/users/";
//reusable
export default class APIService {
    static deleteUser(id) {
        return fetch(backend + id, {
            method: 'DELETE'
        });
    }
    static getAllUsers(){
        return fetch(backend,{
            method:'GET'
        });
    }
    static saveUser(userform){
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userform)
        });
    }
}