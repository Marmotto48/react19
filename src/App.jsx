import { Suspense, useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { use } from "react";

function App() {
  // states
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      });
  }, []);

  // // Use `use` to suspend until the promise resolves
  // const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  //   (response) => response.json()
  // );
  // //Limitation - will create a new promise on every render

  // const products = use(fetchPosts);

  return (
    <Suspense fallback="Loading...">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {products?.map((item, index) => {
          return (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                maxWidth: 360,
                maxHeight: 400,
                minWidth: 250,
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                textAlign: "center",
              }}
            >
              <img
                src={item.images[0]}
                alt=""
                style={{ maxWidth: "80%", maxHeight: 300 }}
              />
              <div style={{ padding: 10 }}>
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Suspense>
  );
}

export default App;
