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
    >
      Home
    </div>
  );
}

export default HomePage;
