import { ThemeProvider } from "styled-components";
import { Posts } from "./pages/Posts";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Posts />
      </ThemeProvider>
    </>
  );
}
