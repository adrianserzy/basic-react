import { CORE_CONCEPTS } from "./data";
import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleAction(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(setSelectedTopic);
  }

  return (
    <div>
      <main>
        <Header />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onAction={() => {
                handleAction("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onAction={() => {
                handleAction("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onAction={() => {
                handleAction("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onAction={() => {
                handleAction("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Prosze wybrać temat.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
