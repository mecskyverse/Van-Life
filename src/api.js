export async function getVans(id){
    const url = id ? `/api/vans/${id}`: '/api/vans' 

    const res = await fetch(url)
    if(!res.ok){
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const json = await res.json();
    return json.vans;
}