import VerifiedTag from "../utils/verifiedTag";

export default function Cta() {
  return (
    <a
      href="/"
      className="bg-transparent m-5 rounded-xl shadow-xl h-[60vh] flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="z-10 w-full sm:bg-[rgba(255,255,255,0.0)] rounded-xl absolute bottom-0 sm:relative bg-[rgba(0,0,0,0.5)] ">
        <h1 className="sm:text-7xl text-4xl sm:ml-20 ml-5 text-white">
          AI CHAIN MARKETPLACE
        </h1>
        <a
          href="https://www.adaptleap.com/"
          target="_blank"
          className="sm:ml-20  ml-5 my-4 text-2xl text-white flex  items-center hover:text-blue-400 transition duration-200"
          rel="noreferrer"
        >
          By Adaptleap <VerifiedTag />
        </a>
      </div>
      <img
        className="w-[90rem] sm:scale-[1] scale-[3]  overflow-hidden object-cover hover:scale-150 transition duration-500 absolute"
        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Gif "
      />
    </a>
  );
}
