import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostsList } from './features/post/PostLists';
import { PostDetails } from './features/post/PostDetails';

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Post Viewer</h1>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
  );
}