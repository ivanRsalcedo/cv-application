import './App.css'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

export default function App() {
  return (
    <>
      <h1>CV-APP</h1>
      <div className="container">
        <General />
        <Education />
        <Experience />
      </div>
      </>
  )
}