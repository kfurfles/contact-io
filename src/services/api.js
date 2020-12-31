import data from './../assets/data/users.json'

export function getUsers(){
    console.log({ data })
    return new Promise(res => {
        setTimeout(() =>{
            res(data)
        },1000)
    })
    // return fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    //     .then(res => res.json())
}