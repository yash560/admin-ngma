import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ArtOfTheDay from "./views/ArtOfTheDay";
import ArtReference from "./views/ArtReference";
import Collection from "./views/Collection";
import Events from "./views/Events";
import Exhibition from "./views/Exhibition";
import News from "./views/News";
import Tenders from "./views/Tenders";
import Vacancies from "./views/Vacancies";

function App() {
  return (
    <div class="min-h-screen flex">
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route path="/news" exact component={News} />
          <Route path="/events" component={Events} />
          <Route path="/ArtOfTheDay" component={ArtOfTheDay} />
          <Route path="/Collection" component={Collection} />
          <Route path="/ArtReference" component={ArtReference} />
          <Route path="/Exhibition" component={Exhibition} />
          <Route path="/Tenders" component={Tenders} />
          <Route path="/Vacancies" component={Vacancies} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
