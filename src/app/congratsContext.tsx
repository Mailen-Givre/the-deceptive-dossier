"use client"

import React, { createContext, useContext, ReactNode, useState } from "react";

interface CongratsContextProps {
    isCongrats: boolean;
    setIsCongrats: React.Dispatch<React.SetStateAction<boolean>>;
}

const CongratsContext = createContext<CongratsContextProps | undefined>(undefined);

export const CongratsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isCongrats, setIsCongrats] = useState<boolean>(false);

    return (
        <CongratsContext.Provider value={{ isCongrats, setIsCongrats }}>
            {children}
        </CongratsContext.Provider>
    );
};

export const useCongratsContext = () => {
    const context = useContext(CongratsContext);
    if (!context) {
        throw new Error("useCongratsContext must be used within a CongratsProvider");
    }
    return context;
};
