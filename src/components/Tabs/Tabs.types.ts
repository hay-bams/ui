export interface TabsContextState {
  defaultValue?: string;
  activeTab: string | null;
  handleTabChange: (val: string | null) => void
}

export interface TabsListsContextState {
  value?: string;

}

export interface TabStyledProps {
  active: boolean;
}