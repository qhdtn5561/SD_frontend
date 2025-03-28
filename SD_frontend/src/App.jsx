// App.jsx
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Product from './components/Product'

function App() {
  return (
    <div className='App'>
      <Header>
        <h2>2025 종합프로젝트</h2>
      </Header>
      <Main>
        <h2>스마트 옷장</h2>
      </Main>
      <Product />
    </div>
  )
}

export default App
