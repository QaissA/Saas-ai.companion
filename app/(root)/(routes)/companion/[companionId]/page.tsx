import prismadb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";

interface CompanionIdPageProps {
    params: {
        companionId: string;
    }
}

async function CompanionIdPage({ params }: CompanionIdPageProps) {

    //TODO: check subscription


    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
        }
    });

    const categories = await prismadb.category.findMany();

    return (
        <CompanionForm
            categories={categories}
            initialData={companion}
        />
    )
}

export default CompanionIdPage