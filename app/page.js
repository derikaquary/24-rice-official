import React from "react";

function HomePage() {
  return (
    <div
      className="h-screen w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "",
        height: "100vh", // adjust the height as needed
      }}
    ></div>
  );
}

export default HomePage;

/* <div className="mt-[5rem]">
        <p className="text-4xl">
          Pure Grain, Pure Quality. Nourishing Every Grain of Life
        </p>
        <p className="text-xl">
          This highlights the quality and essential nature of your product,
          giving a strong and positive impression to your customers.
        </p>
      </div> */
