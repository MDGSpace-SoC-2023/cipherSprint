import backend_client from "BackendClient";

export default function Post_login(data){
    backend_client.post('login/',data).then(response=>{
        console.log(response)
    })
}