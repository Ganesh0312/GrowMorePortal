import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="bg-slate-200 min-h-screen font-sans">
        <header>
          <div className=" bg-blue-500 flex justify-between p-4 rounded">
            <img
              src="https://growmoretechnoline.com/assets/img/grow1.png"
              alt="Logo"
              className="w-20 md:w-32"
            />
            <nav className="flex space-x-5">
              <Link
                to="/studentlogin"
                className="text-white w-20 h-10 bg-orange-400 text-center pt-1 hover:text-gray-300"
              >
                Login
              </Link>
              <Link
                to="/adminlogin"
                className="text-white w-45 h-10 bg-orange-400 text-center pt-1 hover:text-gray-300"
              >
                Admin Login
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex flex-col mt-80 items-center justify-center">
          <img
            src="https://growmoretechnoline.com/assets/img/grow1.png"
            alt="Logo"
            className="w-24 md:w-32 mb-8"
          />
          <h1 className="text-3xl text-black md:text-5xl font-bold text-center mb-4">
            Growmore Techonoline
          </h1>
          <p className="text-center text-black text-lg md:text-xl">
            Welcome to Growmore Indias No. 1 Fastest Growing Company
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
