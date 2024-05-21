import Footer from './Footer';
import Header from './Header';
import Legend from './Legend';

function App() {
  return (
    <>
      <div className="app-container">
        <div className="row">
          <Header />
        </div>
        <div className="row table-container">
          <Legend />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
