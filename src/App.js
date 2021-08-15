import "./App.css";
import Photo from "./Component/Profile/ProfilePhoto";
import Name from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address";
import "./Component/Profile/style.css";

function App() {
  return (
    <>
      <Name />
      <Adress />
      <div className="flowers">
        <Photo />
        <Photo />
        <Photo />
      </div>
    </>
  );
}

export default App;
