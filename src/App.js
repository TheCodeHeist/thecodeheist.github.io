import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
}

export default App;
