import './CustomTabs.css';
import * as Tabs from '@radix-ui/react-tabs';

const CustomTabs = ({ data }) => {
  return (
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" aria-label="Manage your account">
        {data.map((tabItem) => {
          return (
            <Tabs.Trigger key={tabItem.id} className="TabsTrigger" value={tabItem.tabValue}>
              {tabItem.tabTitle}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {data.map((tabItem) => {
        return (
          <Tabs.Content key={tabItem.id} className="TabsContent" value={tabItem.tabValue}>
            {tabItem.tabContent}
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
};

export default CustomTabs;