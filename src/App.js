import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exct path='/Travel' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );

}

export default App;
