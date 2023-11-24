"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useProModel } from "@/hooks/use-pro-model"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import axios from "axios";


function ProModel() {
    const proModel = useProModel();
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);

    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Something went wrong"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={proModel.isOpen} onOpenChange={proModel.onClose}>
            <DialogContent>
                <DialogHeader className="space-y-4">
                    <DialogTitle className="text-center">
                        Upgrade to Pro
                    </DialogTitle>
                    <DialogDescription className="text-center space-y-2">
                        Create <span className="text-sky-500 mx-1 font-medium">Custom AI</span> Companions !
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <div className="flex justify-between">
                    <p className="text-2xl font-medium">
                        99
                        <span className="text-sm font-normal">.99 MAD / mo</span>

                    </p>
                    <Button disabled={loading} onClick={onSubscribe} variant="premuim">
                        Subscribe
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProModel