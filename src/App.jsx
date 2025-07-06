
const App = () => {
  document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
// Whenever the user explicitly chooses light mode
localStorage.theme = "light";
// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");
  return (
    <div className="h-screen bg-white dark:bg-zinc-800">
      <div className="">
      <p className="text-green-500 dark:text-amber-200">hello world</p>
      </div>
   </div>
  )
}

export default App
