import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "przejśc na React", done: false },
  { id: 2, content: "zjeść kolację ", done: true }
];



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zakupów" />
      <Section
        title="Dodaj nowe produkty"
        body={<Form />}
      />

      <Section
        title=" Lista produktów"
        body={< Tasks tasks={tasks}
          hideDone={hideDone} />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone} 
            />
        }
      />
    </Container >
  );
}

export default App;
