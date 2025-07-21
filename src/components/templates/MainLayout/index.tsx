import { MainLayoutProps } from "./types";
import { SearchBox } from "@/components/molecules";

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <SearchBox />
      <main>{children}</main>
    </>
  );
};
