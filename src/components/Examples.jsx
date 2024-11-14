import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleAction(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(setSelectedTopic);
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onAction={() => {
            handleAction("components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onAction={() => {
            handleAction("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onAction={() => {
            handleAction("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
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
    </Section>
  );
}
