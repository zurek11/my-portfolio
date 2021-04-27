import SideBar from "./components/SideBar";
import styled from "styled-components";
import {Route, Switch} from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
        <SideBar />

        <MainContentStyled>
            <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
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
                <Route path="/blog" exact>
                    <BlogPage />
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
  
  .lines {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
