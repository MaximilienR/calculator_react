import './App.css'
import React from 'react'

function App() {
  const buttons = [
    { id: 1, label: "7", value: "7" },
    { id: 2, label: "8", value: "8" },
    { id: 3, label: "9", value: "9" },
    { id: 4, label: "/", value: "/" },

    { id: 5, label: "4", value: "4" },
    { id: 6, label: "5", value: "5" },
    { id: 7, label: "6", value: "6" },
    { id: 8, label: "-", value: "-" },

    { id: 9, label: "1", value: "1" },
    { id: 10, label: "2", value: "2" },
    { id: 11, label: "3", value: "3" },
    { id: 12, label: "+", value: "+" },
    { id: 13, label: "*", value: "*" },

    { id: 14, label: "0", value: "0" },
    { id: 15, label: ",", value: "," },
    { id: 16, label: "=", value: "=" },
  ]

  const [output, setOutput] = React.useState('');

  const handle_click = (button) => {
    if (button === "=") {
      try {
        const result = eval(output);
        setOutput(result.toString());
      } catch (error) {
        setOutput("Erreur");
      }
    } else {
      setOutput(output + button);
    }
  }

  const handle_AC = () => {
    setOutput('');
  }

  return (
    <div className='main'>
      <h2>Calculator</h2>
      <div className='calculator'>
        <div className='header'>
          <input type="text" readOnly value={output} id="output_zone" />
          <button onClick={handle_AC}>AC</button>
        </div>

        <div className='content'>
          {buttons.map((button) => (
            <button
              onClick={() => handle_click(button.value)}
              key={button.id}
            >
              {button.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App