import "./App.css";
import { Navbar } from "./Navbar";
import Section from "./Section";
import { Header } from "./Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let items = [
    {
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      badge: false,
    },
    {
      name: "Special Item",
      price: "$40.00 - $80.00",
      badge: true,
      star: true,
    },
    {
      name: "Sale Item",
      price: "$40.00 - $80.00",
      badge: true,
    },
    {
      name: "Popular Item",
      price: "$40.00 - $80.00",
      badge: false,
      star: true,
    },
    {
      name: "Sale Item",
      price: "$40.00 - $80.00",
      badge: true,
    },
    {
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      badge: false,
    },
    {
      name: "Special Item",
      price: "$40.00 - $80.00",
      badge: true,
      star: true,
    },
    {
      name: "Popular Item",
      price: "$40.00 - $80.00",
      badge: false,
      star: true,
    },
  ];

  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Header></Header> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {items.map((card) => {
              return <Section card={card}></Section>;
            })}

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">HAI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
