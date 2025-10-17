import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

export default function IconComponent() {
  const items = [
    { icon: <FaCheckCircle />, label: "Успішно", note: "Операція виконана" },
    {
      icon: <FaExclamationTriangle />,
      label: "Попередження",
      note: "Перевір ще раз",
    },
    { icon: <FaTimesCircle />, label: "Помилка", note: "Щось пішло не так" },
  ];

  return (
    <div className="icons">
      {items.map((it) => (
        <div className="icons__item" key={it.label}>
          <span className="icons__icon">{it.icon}</span>
          <div className="icons__text">
            <strong>{it.label}</strong>
            <small>{it.note}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
