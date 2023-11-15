import Catagories from "@/components/catagories";
import SearchInput from "@/components/searchInput"
import prismadb from "@/lib/prismadb"


async function RootPage() {
    const categories = await prismadb.category.findMany();
    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput />
            <Catagories data={categories} />
        </div>
    )
}

export default RootPage