export type TabsVariant = 'default' | 'outline' | 'pills';

export interface TabsContextState {
  defaultValue?: string;
  activeTab: string | null;
  handleTabChange: (val: string | null) => void;
  variant: TabsVariant
}

export interface TabsListsContextState {
  value?: string;

}

export interface TabStyledProps {
  active: boolean;
  variant: TabsVariant
}

export interface TabPanelStyledProps {
  active: boolean;
}

export interface TabListStyledProps {
  variant: TabsVariant
}