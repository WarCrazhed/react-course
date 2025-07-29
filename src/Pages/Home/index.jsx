import { useEffect, useState } from "react"
import Card from "../../Components/Card"
import apiUrl from "../../api";

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${apiUrl}/products`);
                const data = await res.json();
                setItems(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (
        <div>
            Home
            <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map(item => (
                        <Card
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </section>
        </div>
    )
}

export default Home