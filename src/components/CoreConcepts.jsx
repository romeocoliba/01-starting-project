import { CORE_CONCEPTS } from '../data';

function CoreConcept(props) {
  return(
    <li>
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export default function CoreConcepts() {
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