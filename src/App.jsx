import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
 
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) && 
       window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  
  localStorage.theme = "light";
  localStorage.theme = "dark";
  localStorage.removeItem("theme");

  return (
    <div className="h-auto bg-zinc-50 dark:bg-zinc-800 dark:text-amber-50">
      <div className="w-full  mx-auto ">
        <Header />
        <div className="h-screen"></div>
        <Footer />
      </div>
    </div>
  );
};

export default App;