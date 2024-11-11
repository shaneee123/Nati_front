import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col items-center justify-center h-screen max-w-lg mx-auto border shadow-lg">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
