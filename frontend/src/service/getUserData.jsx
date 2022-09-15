/**
 * Will fetch the url and gets the response's JSON's data
 * @param {string} url - the url to fetch
 * @returns {object} returns the fetch's response's JSON's data
 */
async function fun(url){
    const RESPONSE = await fetch(url);
    const JSON = await RESPONSE.json();
    const DATA = await JSON.data;
    return DATA;    
}

/**
 * Creates an url for the 4 endpoints we can access from the backend
 * @param {number} USER_ID - the USER's ID we want to fetch, 12 or 18
 * @param {number} DATA_TYPE - 0 to 3, main, activity, performance or average session
 * @returns {object} the data matching the URL 
 */
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
