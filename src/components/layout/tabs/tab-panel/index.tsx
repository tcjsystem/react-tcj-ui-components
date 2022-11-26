export interface TabPanelProps {
  title: string;
  children: React.ReactNode;
}
export default function TabPanel({ children }: TabPanelProps) {
  return <div>{children}</div>;
}
