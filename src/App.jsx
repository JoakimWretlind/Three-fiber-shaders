import { Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyle'
import { Navbar } from './components/navbar';
import { HomePage, Scene01, Scene02, Scene03, Scene04, Scene05 } from './pages'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/01" element={<Scene01 />} />
        <Route path="/02" element={<Scene02 />} />
        <Route path="/03" element={<Scene03 />} />
        <Route path="/04" element={<Scene04 />} />
        <Route path="/05" element={<Scene05 />} />
      </Routes>
    </>
  );
}

export default App;
