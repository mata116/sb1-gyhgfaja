import React, { createContext, useContext, useState } from 'react';

interface AppStateContextType {
  isChatOpen: boolean;
  setIsChatOpen: (value: boolean) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <AppStateContext.Provider value={{ isChatOpen, setIsChatOpen }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};