import type React from "react";
import Header from "./Header";
import Main from "./MainContent";
import { Footer } from "./Footer";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
