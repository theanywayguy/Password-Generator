import { useState } from "react";
import Textfield from "./components/Textfield";
import Header from "./components/Header.JSX";
import Button from "./components/Button";

const App = () => {
  const [Password, setPassword] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const generateRandom = () => {
    const numbers = "1234567890";
    const lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()-=_+[]{}|;:'\",.<>?/";

    const allCharacters =
      numbers + lowercaseAlphabets + uppercaseAlphabets + symbols;

    let newPassword = [
      numbers[Math.floor(Math.random() * numbers.length)],
      lowercaseAlphabets[Math.floor(Math.random() * lowercaseAlphabets.length)],
      uppercaseAlphabets[Math.floor(Math.random() * uppercaseAlphabets.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];

    for (let i = 4; i < 10; i++) {
      newPassword.push(
        allCharacters[Math.floor(Math.random() * allCharacters.length)]
      );
    }

    newPassword = newPassword.sort(() => Math.random() - 0.5).join("");

    setPassword(newPassword);
  };
  const copyPassword = () => {
    if (Password) {
      navigator.clipboard.writeText(Password).then(() => {
        setShowBanner(true);
        setTimeout(() => {
          setShowBanner(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-900">
      <div className="bg-green-500 p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
        {showBanner && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 rounded-lg shadow-md animate-fade">
            Password Copied
          </div>
        )}
        <Header text="Generate A Password" />
        <Textfield text={Password} />
        <Button name="Generate" onClick={generateRandom} />
        <br />
        <Button name="Copy" onClick={copyPassword} />
      </div>
    </div>
  );
};

export default App;
