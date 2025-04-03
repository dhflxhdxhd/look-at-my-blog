import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import MainPage from "./pages/MainPage";
// import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/post/:id" element={<PostDetailPage />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
