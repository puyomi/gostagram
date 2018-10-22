import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({ name: "Gostagram" })
  .use(reactotronRedux())
  .connect();

export default Reactotron;
