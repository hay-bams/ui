import { createContext } from "react";

import { TabsListsContextState } from "./Tabs.types";

interface TabsListsProviderProps {
  value?: string;
}


const defaultValue: TabsListsContextState = {}


const TabsListContext = createContext<TabsListsContextState>(defaultValue)

export const TabsListsProvider = ({value}: TabsListsProviderProps) => {
  return (
    <div>TabsListsProvider</div>
  )
}
