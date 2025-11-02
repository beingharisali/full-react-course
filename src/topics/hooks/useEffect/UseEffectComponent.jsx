import React, { useEffect, useState } from "react";

function UseEffectComponent() {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(window.innerWidth);
  //   useEffect(() => {
  //     document.title = `New Title ${value}`;
  //     console.log("useEffect Logic rendered here");
  //   }, [value]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resizing window");
      setSize(window.innerWidth);
    });
  }, []);
  //   console.log("Component Rendered here");
  return (
    <div>
      <h1>useEffect Component</h1>
      {/* <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click</button> */}
      <h1>{size}px</h1>
    </div>
  );
}

export default UseEffectComponent;
