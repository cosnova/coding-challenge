import NavBar from '@/components/NavBar.tsx'
import ListPage from '@/pages/ListPage.tsx'
import HomePage from '@/pages/HomePage.tsx'

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <HomePage />
      break
    case '/list':
      component = <ListPage />
      break
    default:
      component = <div>Not Found</div>
  }

  return (
    <>
      <NavBar />
      {component}
    </>
  )
}

export default App
