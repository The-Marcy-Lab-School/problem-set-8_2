import { UserCard } from "./UserCard";

async function getUsers(userID) {
    
    const url = `https://reqres.in/api/users/${userID}`;

    try {
        const response = await fetch(url)
        const data = await response.text();
        const results = JSON.parse(data);
        return results.data;
    }
    catch (err) {
        console.log(`Fetch on getUsers Failed. Status Code: ${err.status}`);
        return;
    }
}

export default getUsers;