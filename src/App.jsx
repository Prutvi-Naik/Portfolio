
import Header from "./components/Header";
const App = () => {
  document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
localStorage.theme = "light";
localStorage.theme = "dark";
localStorage.removeItem("theme");
  return (
  
    <div className="h-full bg-zinc-50 dark:bg-zinc-800 dark:text-amber-50 ">
      <div className="w-full max-w-11/12 mx-auto pt-6">
     <Header/>
      <div className="h-300"></div>
      </div>
   
   </div>
  
  )
}

export default App
