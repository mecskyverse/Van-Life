import React from 'react'

function Vans() {
    const [array, setArray] = useState([])
    useEffect(() => {
        async function fetchData() {
            const items = await fetch("/api/vans")
            const json = await items.json();
            setArray(json.vans);
            console.log(json.vans)
        }
        fetchData();
    }, [])
    return (
        <div>
            <div>Explore Our Van Options</div>

            {array.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export default Vans