import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

function CoreConcept(props) {
  return(
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function CoreConcepts() {
  let coreConcepts = [];
  for (let index = 0; index < CORE_CONCEPTS.length; index++) {
    coreConcepts.push(
      <CoreConcept
        title={CORE_CONCEPTS[index].title}
        description={CORE_CONCEPTS[index].description}
        image={CORE_CONCEPTS[index].image}
      />
    );
  }

  return <ul>{coreConcepts}</ul>;
}

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
