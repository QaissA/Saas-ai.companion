"use client"

import { Companion } from "@prisma/client"
import { ChatMessage, ChatMessageProps } from "./chat-message"
import { ElementRef, useEffect, useRef, useState } from "react"

interface ChatMessagesProps {
    companion: Companion,
    isLoading: boolean,
    messages: ChatMessageProps[]
}

function ChatMessages({ messages = [], isLoading, companion }: ChatMessagesProps) {
    const scrollRef = useRef<ElementRef<"div">>(null);

    const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFakeLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages.length])
    return (
        <div className="flex-1 overflow-y-auto pr-4">
            <ChatMessage
                src={companion.src}
                role="system"
                content={`hello I am ${companion.name}, ${companion.description}`}
                isLoading={fakeLoading}
            />
            {messages.map((message) => (
                <ChatMessage
                    key={message.content}
                    role={message.role}
                    content={message.content}
                    src={message.content}
                />
            ))}
            {isLoading && (
                <ChatMessage
                    role="system"
                    src={companion.src}
                    isLoading
                />
            )}
            <div ref={scrollRef} />
        </div>
    )
}

export default ChatMessages