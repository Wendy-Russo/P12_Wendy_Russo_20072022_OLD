
async function fun(url){
    const RESPONSE = await fetch(url);
    const JSON = await RESPONSE.json();
    const DATA = await JSON.data;
    return DATA;    
}

export const getUserData = ( USER_ID, DATA_TYPE) => {

    let url;

    switch (DATA_TYPE) {
        case "main":
            url = `http://localhost:3000/user/${USER_ID}`;
            break;
        case "activity":
            url = `http://localhost:3000/user/${USER_ID}/activity`;
            break;
        case "performance":
            url = `http://localhost:3000/user/${USER_ID}/performance`;
            break;
        case "average":
            url = `http://localhost:3000/user/${USER_ID}/average-sessions`;
            break;
        default:
            url = `http://localhost:3000/user/${USER_ID}`;
            break;
    }

    return fun(url);

}
