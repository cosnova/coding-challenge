import './App.css'
import { routes } from './routes/router';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';

function App() {

  return (
    <>
      <Header />
      <Content>
        <Routes>
        {routes.map((route) => <Route path={route.path} element={route.element} key={route.title} />)}
        </Routes>
      </Content>
      <Footer />
    </>
  )
}

export default App
