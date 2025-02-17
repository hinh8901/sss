import { JSX, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const MainContent = ({ children }: ContainerProps): JSX.Element => {
  return (
    <main className="min-h-[calc(100vh-64px)] w-full">
      <div className="max-w-layout px-4 py-8 lg:px-8">{children}</div>
    </main>
  );
};

export default MainContent;
