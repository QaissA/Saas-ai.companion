import Catagories from "@/components/catagories";
import Companions from "@/components/companions";
import SearchInput from "@/components/searchInput"
import prismadb from "@/lib/prismadb"

interface RootPageProps {
    //we can acces the searchParams from any nextjs server component
    searchParams: {
        categoryId: string;
        name: string;
    }
}




async function RootPage({ searchParams }: RootPageProps) {
    const data = await prismadb.companion.findMany({
        where: {
            categoryId: searchParams.categoryId,
            name: {
                search: searchParams.name
            }
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            _count: {
                select: {
                    messages: true
                }
            }
        }
    })

    const categories = await prismadb.category.findMany();
    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput />
            <Catagories data={categories} />
            <Companions data={data} />
        </div>
    )
}

export default RootPage