"use client"

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

interface SubscriptionBtnProprs {
    isPro: boolean;
}

function SubscriptionBtn({ isPro }: SubscriptionBtnProprs) {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const onClick = async () => {
        try {
            setLoading(true);

            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url
        } catch (error) {
            toast({
                variant: "destructive",
                description: "something went wrong"
            })
        } finally {
            setLoading(false);
        }
    }
    return (
        <Button disabled={loading} onClick={onClick} size="sm" variant={isPro ? "default" : "premuim"}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Sparkles className="h-4 w-4 ml-2 fill-white" />}
        </Button>

    )
}

export default SubscriptionBtn