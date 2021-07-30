import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Fsbutton from "./components/fsbutton";
import ActivityStudio from "./components/ActivityStudio";
import AdviseFromWise from "./components/AdviseFromWise";
import ProgressBar from "./components/Progress";
import ActivityStudio2 from "./components/ActivityStudio2";
import SelfDiary from "./components/SelfDiary";
import DreamCommunity from "./components/DreamCommunity";
import Joinevent from "./components/Joinevent";
import { Container, Row, Col } from "react-bootstrap";
import Rightbar from "./components/Rightbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee, faFolder);

function App() {
  return (
    <div className="App">
      {/*
      <Container fluid>
        <Row className="pagecontainer">
          <Col xs="2" sm="2" md="2" lg="2">
            <Sidebar />
          </Col>
          <Col className="DreamCommunity" xs="7" sm="7" md="7" lg="7">
            <DreamCommunity />
            <StepOne />
          </Col>
          <Col className="active-maties" xs="3" sm="3" md="3" lg="3">
            <Rightbar />
          </Col>
        </Row>
      </Container>*/}
      <Joinevent />
    </div>
  );
}

export default App;
