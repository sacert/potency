import logo from './real_logo.png';
import arrow from './arrow-down.png';
import github from './github.png';
import gitlab from './gitlab.png';
import bitbucket from './bitbucket.svg';
import figma from './figma.svg';
import invision from './invision.svg';
import slack from './slack.png';
import jira from './jira.png';
import markdown from './markdown.png';
import reviewers from './reviewers.png';
import './App.css';

function App() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const success = params.get('success');

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Potency</div>
        </div>
      </header>
      <div className="content">
        { success && 
          <div>
            <div class="alert">
              <span class="closebtn" onClick={(e) => {e.target.parentElement.style.display='none'}}>&times;</span> 
              <strong>Success!</strong> You will be notified when Potency is ready for use! 
            </div>
          </div>
        }
        <img src={logo} className="App-logo-content" alt="logo" />
        <header className="App-title-content">
          Design Docs for <u>Developers</u>
        </header>
        <p className="App-title-content-sub">
          Potency is an app to help create design docs that are cattered towards developers 
        </p>
        <div className="App-link-wrapper">
          <a
            className="App-link"
            href="#form"
          >
            Join the Beta
          </a>
        </div>
        <img src={arrow} className="App-arrow" alt="arrow" />
        <div className="features">
          <div className="vcs-integration">
            <header className="vcs-header">Connect with your VCS to show code snippets</header>
            <div className="vcs-logos">
              <img src={github} className="vcs-github" alt="logo" />
              <img src={gitlab} className="vcs-gitlab" alt="logo" />
              <img src={bitbucket} className="vcs-bitbucket" alt="logo" />
            </div>
          </div>
          <div className="integration">
            <header className="vcs-header">Integrate with your favourite apps with more on the way</header>
            <div className="vcs-logos-integration">
              <img src={jira} className="vcs-jira" alt="logo" />
              <img src={figma} className="vcs-figma" alt="logo" />
              <img src={invision} className="vcs-invision" alt="logo" />
              <img src={slack} className="vcs-slack" alt="logo" />
            </div>
          </div>
          <div className="approval-review">
            <header className="vcs-header">Request appoval from within the organization</header>
            <img src={reviewers} className="reviewers" alt="logo" />
          </div>
        </div>
        <div className="divider"/>
        <div className="signup">
          <div className="signup-description">
            We're building Potency, an app designed for <strong>developers</strong> to build technical design docs with the features they want. Join the waiting list for early access to the Beta!
          </div>
          <form id="form" className="form" action="http://localhost:5000/signup" method="post">
            <div className="email-form">
              <label className="email-address">
                <div>
                  Email Address
                </div>
                <input className="email-input" type="email" name="email" />
              </label>
            </div>
            <div className="submit-wrapper">
              <input className="submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
