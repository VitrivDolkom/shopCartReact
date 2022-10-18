import "./_zeroing_style.scss";
import "./main.scss";
import "./vars.scss";
import "./fonts.css";
import Title from "../Title";
import { Cart } from "../Cart";

function App() {
  return (
    <div className='wrapper'>
      <div className="box">
        <Title />
        <Cart />
      </div>
    </div>
  );
}

export default App;
