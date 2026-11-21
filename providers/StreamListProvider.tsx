"use client";

import { createContext, useContext, useState } from "react";

export type StreamListContextType = {
    streams: string[];
    addStream: (stream: string) => void;
    removeStream: (stream: string) => void;
};

const ThemeContext = createContext<StreamListContextType | undefined>(
    undefined,
);

export const StreamListProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [streams, setStreams] = useState<string[]>([]);

    const addStream = (stream: string) => {
        setStreams((prevStreams) => [...prevStreams, stream]);
        console.log("Added stream:", stream);
    };

    const removeStream = (stream: string) => {
        setStreams((prevStreams) => prevStreams.filter((s) => s !== stream));
    };

    return (
        <ThemeContext.Provider value={{ streams, addStream, removeStream }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useStreamList = (): StreamListContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useStreamList must be used within a StreamListProvider",
        );
    }
    return context;
};
