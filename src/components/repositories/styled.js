import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 18px;
  width: 100%;
  margin-top: 3px; 
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 8px;
  display: flex;
  margin-bottom: 6px;
  border: 3px solid white;
  border-radius: 10px;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(170, 170, 170), rgb(104, 106, 124));
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 3px solid white;
  padding: 16px;
  user-select: none;
  margin-top: 12px;
  cursor: pointer;
  z-index: 99999;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(170, 170, 170), rgb(104, 106, 124));
  margin-left: 28px;
  margin-bottom: 20px;
  

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 3px solid white;
  display: none;
  margin-top: -5px;
  border-radius: 10px;
  

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  
`;
