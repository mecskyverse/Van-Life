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
export async function getHostVans(id){
    const url = id ? `/api/host/vans/${id}`: '/api/host/vans'
  const res = await fetch(url)
    if(!res.ok){
        throw{
            message: "Failed To fetch Host Vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const json = await res.json()
    if(id) return json.vans[0];
    else return json.vans;
}