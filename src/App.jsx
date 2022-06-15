import { Footer, Err, MainLayout, List, Post, Profile  } from './contect'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
      <div className="app">
        <MainLayout >
          <Routes>
            <Route path='/' element={<Footer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/post' element={<Post />} />
            <Route path='/post/:id' element={<List />} />
            <Route path='*' element={<Err />} />
          </Routes>
        </MainLayout>
      </div>
    )
}

export default App;
