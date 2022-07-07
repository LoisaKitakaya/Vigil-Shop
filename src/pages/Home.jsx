import Cartcart from "../layout/Cartcart";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Home = () => {
  return (
    <div className="home">
      {/* body */}
      <div className="navigation-container">
        {/* content */}
        <div className="container">
          {/* navbar */}
          <Navbar />
          {/* navbar */}

          <br />

          <div className="set-container">
            {/* cartcart */}
            <Cartcart />
            {/* cartcart */}

            {/* other */}
            <div className="other">
              <h3>Vigil surveillance, your kind of surveillance</h3>
            </div>
            {/* other */}
          </div>
        </div>
        {/* content */}
      </div>

      <br />

      {/* main body */}
      <div className="container">
        {/* content */}
        <div className="container-fluid">
          {/* content */}
          <h1>Home is working!</h1>
          <h1>Home is working!</h1>
          {/* content */}
        </div>
        {/* content */}
      </div>
      {/* main body */}

      <div className="footer-container">
        {/* content */}
        <div className="container">
          {/* footer */}
          <Footer />
          {/* footer */}
        </div>
        {/* content */}
      </div>
      {/* body */}
    </div>
  );
};

export default Home;
