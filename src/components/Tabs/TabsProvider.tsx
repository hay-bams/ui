import {ReactNode, createContext, useCallback, useMemo, useState} from 'react';

import {TabsContextState} from './Tabs.types';

interface TabsProviderProps {
  children: ReactNode;
  defaultValue?: string;
}

const defaultContextValue: TabsContextState = {
  activeTab: null,
  handleTabChange: () => {}
};

export const TabsContext = createContext<TabsContextState>(defaultContextValue);

export const TabsProvider = ({children, defaultValue}: TabsProviderProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(defaultValue || null);

  const handleTabChange = useCallback(
    (tabValue: string | null) => {
      if (activeTab !== tabValue) {
        setActiveTab(tabValue);
      } else {
        setActiveTab(null);
      }
    },
    [activeTab],
  );

  const contextValue = useMemo(
    () => ({
      defaultValue: defaultValue || defaultContextValue.defaultValue,
      activeTab: activeTab || defaultContextValue.activeTab,
      handleTabChange,
    }),
    [defaultValue, activeTab ,handleTabChange],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      {children}
    </TabsContext.Provider>
  );
};
