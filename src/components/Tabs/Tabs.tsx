import {ReactNode, useContext} from 'react';
import styled from 'styled-components';

import {TabsContext, TabsProvider} from './TabsProvider';
import {TabPanelStyledProps, TabStyledProps} from './Tabs.types';

interface TabsProps {
  children?: ReactNode;
  defaultValue?: string;
}

interface TabsListProps {
  children?: ReactNode;
}

interface TabProps {
  children?: ReactNode;
  value: string | null;
  icon?: ReactNode;
}

interface TabPanelProps {
  children?: ReactNode;
  value: string | null;
}

const TabsStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const TabsListStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  border-bottom: 2px solid #dee2e6;
`;

const TabStyled = styled.button<TabStyledProps>`
  box-sizing: border-box;
  display: inline-block;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid transparent;
  border-color: ${(props) => props.active && 'red'};
  margin-bottom: -2px;
  padding: 10px 16px;
  cursor: pointer;
  &:hover {
    background: #f8f9fa;
    border-color:  ${(props) => props.active ? 'red' :  '#dee2e6'};
  }
`;

const TabPanel = styled.div<TabPanelStyledProps>`
  box-sizing: border-box;
  margin-top: 10px;
  display: ${(props) => !props.active && 'none'}
`;

export const Tabs = ({children, defaultValue = ''}: TabsProps) => (
  <TabsProvider defaultValue={defaultValue}>
    <TabsStyled>{children}</TabsStyled>
  </TabsProvider>
);

const TabsLists = ({children}: TabsListProps) => {
  return <TabsListStyled>{children}</TabsListStyled>;
};

const Tab = ({children, value, icon}: TabProps) => {
  const {activeTab, handleTabChange} = useContext(TabsContext);
  return (
    <TabStyled
      active={!!(activeTab === value)}
      onClick={() => handleTabChange(value)}>
      {icon}
      {children}
    </TabStyled>
  );
};

const TabsPanel = ({children, value}: TabPanelProps) => {
  const {activeTab} = useContext(TabsContext);
  return <TabPanel  active={!!(activeTab === value)}>{children}</TabPanel>;
};

Tabs.List = TabsLists;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
