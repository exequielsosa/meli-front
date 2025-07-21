import "@/styles/globals.scss";
import { SearchBox } from "@/components/molecules";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SearchBox />
      <Component {...pageProps} />
    </>
  );
}
