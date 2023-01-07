import {ReactNode, createContext, useCallback, useMemo, useState} from 'react';

import {TabsVariant, TabsContextState} from './Tabs.types';

interface TabsProviderProps {
  children: ReactNode;
  defaultValue?: string;
  variant: TabsVariant
}

const defaultContextValue: TabsContextState = {
  activeTab: null,
  handleTabChange: () => {},
  variant: 'default'
};

export const TabsContext = createContext<TabsContextState>(defaultContextValue);

export const TabsProvider = ({children, defaultValue, variant}: TabsProviderProps) => {
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
      variant: variant || defaultContextValue.variant
    }),
    [defaultValue, activeTab ,handleTabChange, variant],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      {children}
    </TabsContext.Provider>
  );
};
