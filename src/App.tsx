import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default";
import { PostsProvider } from "./contexts/PostsContext";
import { BrowserRouter } from "react-router";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <PostsProvider>
            <Header />
            <Router />
          </PostsProvider>
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
