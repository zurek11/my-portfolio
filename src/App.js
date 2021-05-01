import SideBar from "./components/SideBar";
import styled from "styled-components";
import {Route, Switch} from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
        <SideBar />

        <MainContentStyled>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/about" exact>
                    <AboutPage />
                </Route>
                <Route path="/resume" exact>
                    <ResumePage />
                </Route>
                <Route path="/portfolio" exact>
                    <PortfolioPage />
                </Route>
                <Route path="/blogs" exact>
                    <BlogsPage />
                </Route>
                <Route path="/contact" exact>
                    <ContactPage />
                </Route>
            </Switch>
        </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

export default App;
