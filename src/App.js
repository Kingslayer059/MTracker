import LoginMenu from './components/LoginMenu';
import SignupMenu from './components/SignupMenu';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-zinc-900 min-h-screen flex flex-col text-white p-4 md:p-8">
          <div className="mb-4">
            <h1 className="text-4xl font-bold">MTrack</h1>
            <p className="text-xl font-light">Your personal medication tracker</p>
            <hr className="border-t border-gray-700 w-full my-4" />
          </div>
          <Routes>
            <Route path="/login" element={<LoginMenu />} />
            <Route path="/signup" element={<SignupMenu />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
