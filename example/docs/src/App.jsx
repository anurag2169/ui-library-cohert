import "./App.css";
import { Button, useTheme } from "lotus_ui";
import "lotus_ui/styles.css";

function App() {
  const { theme, setAppTheme, availableThemes } = useTheme();

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
      <Button />
      <div className="p-4">
        <p>
          Current Theme: <strong>{theme}</strong>
        </p>
        <div className="flex gap-2 mt-2">
          {availableThemes.map((t) => (
            <button
              key={t}
              onClick={() => setAppTheme(t)}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
