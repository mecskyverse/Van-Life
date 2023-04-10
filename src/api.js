export async function getVans(){
            const items = await fetch("/api/vans")
            const json = await items.json();
            return json.vans;
}