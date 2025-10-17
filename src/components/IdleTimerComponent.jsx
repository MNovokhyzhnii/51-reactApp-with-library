import React, { useRef, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";
import Button from "./Button.jsx";

export default function IdleTimerComponent({ username = "User" }) {
  const [isIdle, setIsIdle] = useState(false);
  const idleToastId = useRef(null);

  const onIdle = () => {
    setIsIdle(true);
    if (!idleToastId.current) {
      idleToastId.current = toast.warn(`${username}, ви неактивні. Ви тут?`, {
        autoClose: false,
        closeOnClick: false,
      });
    }
  };

  const onActive = () => {
    setIsIdle(false);
    if (idleToastId.current) {
      toast.dismiss(idleToastId.current);
      idleToastId.current = null;
      toast.success("Повернулися до активності ✅");
    }
  };

  useIdleTimer({
    timeout: 10_000, // 10 секунд для демо
    throttle: 500,
    onIdle,
    onActive,
    crossTab: true, // якщо кілька вкладок
  });

  return (
    <div className={`idle ${isIdle ? "idle--on" : "idle--off"}`}>
      <span>
        Статус: <strong>{isIdle ? "Неактивний" : "Активний"}</strong>
      </span>
      <Button onClick={onActive}>Я тут</Button>
    </div>
  );
}
