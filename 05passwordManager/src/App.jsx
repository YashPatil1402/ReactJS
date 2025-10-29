import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(12);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let newPassword = "";

    if (includeNumbers) characters += "0123456789";
    if (includeSymbols) characters += "@$%^&*{}";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  }, [passwordLength, includeNumbers, includeSymbols]);

  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeNumbers, includeSymbols, generatePassword]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-2xl p-6 text-white">
      
        <h1 className="text-2xl font-bold text-center mb-5 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Password Generator
        </h1>

       
        <div className="flex items-center mb-5 bg-gray-700 rounded-lg overflow-hidden shadow-inner">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            placeholder="Generated password..."
            className="w-full px-4 py-2 bg-gray-700 text-white outline-none text-lg tracking-wide"
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 hover:bg-blue-600 transition-all px-4 py-2 text-white font-medium"
          >
            Copy
          </button>
        </div>

      
        <div className="space-y-4 text-sm">
         
          <div className="flex items-center justify-between">
            <label className="font-medium">Length: {passwordLength}</label>
            <input
              type="range"
              min={6}
              max={30}
              value={passwordLength}
              onChange={(e) => setPasswordLength(Number(e.target.value))}
              className="w-2/3 accent-blue-500 cursor-pointer"
            />
          </div>

         
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((prev) => !prev)}
                className="accent-blue-500 scale-110"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols((prev) => !prev)}
                className="accent-blue-500 scale-110"
              />
              Include Symbols
            </label>
          </div>

         
          <button
            onClick={generatePassword}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all text-white py-2 mt-4 rounded-lg text-lg font-semibold"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
