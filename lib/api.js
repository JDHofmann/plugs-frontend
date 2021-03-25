export async function getApiData() {
    const res = await fetch("http://localhost:3000/users/3")
    const data = await res.json()
    return data
}