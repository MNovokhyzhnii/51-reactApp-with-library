import React from "react";
import Button from "./Button.jsx";
import { toast } from "react-toastify";

export default function ToastNotification() {
  const notify = {
    success: () => toast.success("Все ок! Дані збережені."),
    error: () => toast.error("Помилка! Спробуй ще раз."),
    warn: () => toast.warning("Увага! Перевір поля форми."),
    info: () => toast.info("Інфо: оновлення застосунку."),
  };

  return (
    <div className="row wrap">
      <Button onClick={notify.success}>toast.success</Button>
      <Button onClick={notify.error}>toast.error</Button>
      <Button onClick={notify.warn}>toast.warning</Button>
      <Button onClick={notify.info}>toast.info</Button>
    </div>
  );
}
