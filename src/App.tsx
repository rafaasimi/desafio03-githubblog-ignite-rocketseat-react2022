import { ThemeProvider } from "styled-components";
import { Posts } from "./pages/Posts";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default";
import { PostsProvider } from "./contexts/PostsContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <PostsProvider>
          <Header />
          <Posts />
        </PostsProvider>
      </ThemeProvider>
    </>
  );
}
