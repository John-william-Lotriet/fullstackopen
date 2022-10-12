import Header from "./Components/Header";
import Content from "./Components/Content";
import Total from "./Components/Total";
import { data } from "./data";

const App = () => {
  const { name, parts } = data;

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
