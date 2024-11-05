import logo from "/logo.png";
import header from "/avatar@2x.png";

const App = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-logo">
          <img src={logo} />
        </div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="header">
        <img src={header} />
        <h1>
          I do code and <br />
          make content <span>about it!</span>
        </h1>
        <p>
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
      </div>
    </>
  );
};

export default App;
