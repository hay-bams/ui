import {ReactNode, useContext} from 'react';
import styled, {css} from 'styled-components';

import {TabsContext, TabsProvider} from './TabsProvider';
import {
  TabListStyledProps,
  TabPanelStyledProps,
  TabStyledProps,
  TabsVariant,
} from './Tabs.types';
import {tabListVariantStyles, tabVariantStyles} from './Tabs.styles';

interface TabsProps {
  children?: ReactNode;
  defaultValue?: string;
  variant?: TabsVariant;
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

const TabsListStyled = styled.div<TabListStyledProps>`
  box-sizing: border-box;
  display: flex;
  ${(props) => css`
    ${tabListVariantStyles(props.variant)}
  `}
`;

const TabStyled = styled.button<TabStyledProps>`
  box-sizing: border-box;
  display: inline-block;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  cursor: pointer;
  position: relative;
  border-radius: 4px 4px 0px 0px;
  ${(props) => css`
    ${tabVariantStyles(props.variant, props.active)};
  `};
`;

const TabPanel = styled.div<TabPanelStyledProps>`
  box-sizing: border-box;
  margin-top: 10px;
  display: ${(props) => !props.active && 'none'};
`;

export const Tabs = ({
  children,
  defaultValue = '',
  variant = 'default',
}: TabsProps) => (
  <TabsProvider defaultValue={defaultValue} variant={variant}>
    <TabsStyled>{children}</TabsStyled>
  </TabsProvider>
);

const TabsLists = ({children}: TabsListProps) => {
  const {variant} = useContext(TabsContext);
  return <TabsListStyled variant={variant}>{children}</TabsListStyled>;
};

const Tab = ({children, value, icon}: TabProps) => {
  const {activeTab, handleTabChange, variant} = useContext(TabsContext);
  return (
    <TabStyled
      variant={variant}
      active={!!(activeTab === value)}
      onClick={() => handleTabChange(value)}>
      {icon}
      {children}
    </TabStyled>
  );
};

const TabsPanel = ({children, value}: TabPanelProps) => {
  const {activeTab} = useContext(TabsContext);
  return <TabPanel active={!!(activeTab === value)}>{children}</TabPanel>;
};

Tabs.List = TabsLists;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
