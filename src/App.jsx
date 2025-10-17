import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { FaReact } from "react-icons/fa";
import Button from "./components/Button.jsx";
import IconComponent from "./components/IconComponent.jsx";
import ToastNotification from "./components/ToastNotification.jsx";
import IdleTimerComponent from "./components/IdleTimerComponent.jsx";
import ThemePicker from "./components/ThemePicker.jsx";
import { useLocalStorage } from "./utils/hooks.js";

export default function App() {
  const [themeColor, setThemeColor] = useLocalStorage("themeColor", "#00B8F0");
  const [username, setUsername] = useLocalStorage("username", "Mykola");

  return (
    <div className="container" style={{ "--theme": themeColor }}>
      <header className="header">
        <FaReact className="logo-spin" size={28} />
        <h1>React Demo: Icons • Toastify • IdleTimer • Color Picker</h1>
      </header>

      <section className="card">
        <h2>1) React Icons</h2>
        <p>Набір іконок для UI. Нижче — три стани дій:</p>
        <IconComponent />
      </section>

      <section className="card">
        <h2>2) React Toastify</h2>
        <p>Клікни кнопки, щоб побачити різні типи сповіщень.</p>
        <ToastNotification />
      </section>

      <section className="card">
        <h2>3) React Idle Timer</h2>
        <p>
          Відстежує бездіяльність користувача. Якщо ти неактивний 10 сек —
          отримаєш попередження з можливістю “Я тут”.
        </p>
        <IdleTimerComponent username={username} />
      </section>

      <section className="card">
        <h2>
          4) Додаткова бібліотека: <code>react-colorful</code>
        </h2>
        <p>
          Палітра для керування темним акцентом інтерфейсу (зберігається в{" "}
          <code>localStorage</code>).
        </p>
        <ThemePicker color={themeColor} onChange={setThemeColor} />
        <div className="preview">
          <span>Поточний колір теми:</span>
          <div className="dot" style={{ background: themeColor }} />
        </div>
      </section>

      <section className="card">
        <h2>Збереження імені користувача</h2>
        <p>Просто демо локального стану з localStorage.</p>
        <div className="row">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введи ім’я"
          />
          <Button onClick={() => alert(`Привіт, ${username}!`)}>Say hi</Button>
        </div>
      </section>

      <footer className="footer">
        <small>Made with love by Mykola Novokhyzhnii • Vite + React</small>
      </footer>

      <ToastContainer position="top-right" />
    </div>
  );
}
