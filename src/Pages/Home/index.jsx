import { useContext } from "react"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
    const { items, searchByTitle, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext);

    const renderView = () => {
        if (searchByTitle?.length > 0) {
            if (filteredItems?.length > 0) {
                return (
                    filteredItems?.map(item => (
                        <Card
                            key={item.id}
                            data={item}
                        />
                    ))
                )
            } else {
                return (
                    <div>
                        <h2>We didn't find any products for this search :(</h2>
                    </div>
                )
            }
        } else {
            return (
                items?.map(item => (
                    <Card
                        key={item.id}
                        data={item}
                    />
                ))
            )
        }
    }

    return (
        <>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input
                className="border border-black rounded-lg w-80 p-4 mb-4 focus:outline-none"
                type="text"
                placeholder="Search a product"
                onChange={(e) => setSearchByTitle(e.target.value)}
            />
            <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
            </section>
            <ProductDetail />
        </>
    )
}

export default Home