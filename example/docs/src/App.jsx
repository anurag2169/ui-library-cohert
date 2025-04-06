import "./App.css";
import { Button, useTheme } from "lotus_ui";
import "lotus_ui/styles.css";

function App() {
  const { theme, setAppTheme, availableThemes } = useTheme();

  const colors = [
    "primary",
    "secondary",
    "muted",
    "destructive",
    "success",
  ];
  
  const variants = ["solid", "outline", "flat", "text"];


  return (
    <section className={`${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <h1 className="py-4 text-3xl text-center font-bold underline text-red-600">
        LotusUI
      </h1>
      <div className="p-6 space-y-8">
      {variants.map((variant) => (
        <div key={variant}>
          <h2 className={`text-xl font-semibold capitalize mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>{variant} variant</h2>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button
                key={`${variant}-${color}`}
                variant={variant}
                rounded="md"
                size="md"
                color={color}
                className={""}
              >
                {color}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
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
    </section>
  );
}

export default App;
