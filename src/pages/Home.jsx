import React from "react";

function Home() {
  return (
    <>
      <div className="container-home h-screen w-screen bg-black text-white">
        <div className="container-title w-full h-32 border flex items-center justify-center text-4xl font-bold tracking-widest">
          <h1>NEROBLOG</h1>
        </div>
        <div className="container-content border w-full lg:h-5/6"></div>
      </div>
    </>
  );
}

export default Home;
