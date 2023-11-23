import prismadb from "@/lib/prismadb";
import CompanionForm from "./components/companion-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionIdPageProps {
    params: {
        companionId: string;
    }
}

async function CompanionIdPage({ params }: CompanionIdPageProps) {

    //TODO: check subscription


    const { userId } = auth();

    if (!userId) {
        return redirectToSignIn();
    }

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.companionId,
            userId,
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