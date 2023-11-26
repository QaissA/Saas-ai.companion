import SubscriptionBtn from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription"

async function Settings() {

    const isPro = await checkSubscription();
    return (
        <div className="h-full p-4 space-y-2">
            <h3 className="text-lg font-meduim">Settings</h3>
            <div className="text-muted-foreground text-sm">
                {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan"}
            </div>
            <SubscriptionBtn isPro={isPro} />
        </div>
    )
}

export default Settings