
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <CoreConcepts />
        </section>
      </main>
    </div>
  );
}

export default App;
