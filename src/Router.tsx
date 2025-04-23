import { Route, Routes } from "react-router";
import { PostsPage } from "./pages/Posts";
import { PostPage } from "./pages/Post";


export function Router() {
  return (
    <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/:issueNumber" element={<PostPage />} />
    </Routes>
  );
}
