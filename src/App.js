import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "przejśc na React", done: true },
  { id: 2, content: "zjeść kolację ", done: true }
];

const hideDoneTasks = true;

function App() {
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
          hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks}
            hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container >
  );
}

export default App;
