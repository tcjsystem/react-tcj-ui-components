export interface TabProps {
  title: string;
  children: React.ReactNode;
}
export default function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}
