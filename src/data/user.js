export const user ={
    name:"Rishi@1709",
    email:"rishistack17@gmail.com"
}
export default function Validate  (data){
    let res = "no"
    if (data.name == user.name){
        if(data.email ==user.email){
            res= 'succes'
        }else{
            res= 'wrontg email'
        }
    }else{
        res= 'wrong name'
    }
    return res
}