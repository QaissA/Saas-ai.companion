"use client"
import { ChatRequestOptions } from "ai";
import { ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatFormProps {
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
    isLoading: boolean;
}

function ChatForm({
    input,
    handleInputChange,
    onSubmit,
    isLoading
}: ChatFormProps) {
    return (
        <form onSubmit={onSubmit} className="border-t border-primary/10 py-4 flex items-center gap-x-2">
            <Input
                disabled={isLoading}
                value={input}
                onChange={handleInputChange}
                placeholder="type a message"
                className="rounded-lg bg-primary/10"
            />
            <Button disabled={isLoading} variant="ghost" size="icon">
                <SendHorizonal className="w-6 h-6" />
            </Button>
        </form>
    )
}

export default ChatForm