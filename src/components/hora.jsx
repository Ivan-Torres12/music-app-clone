import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");
  const [sticker, setSticker] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      
      hours = hours % 12 || 12; // Convertir a formato 12 horas
      setTime(`${hours}:${minutes} ${ampm}`);

      // Determinar el saludo y el sticker
      if (now.getHours() < 12) {
        setGreeting("Buenos días");
        setSticker("☀️");
      } else if (now.getHours() < 20) {
        setGreeting("Buenas tardes");
        setSticker("🌤️");
      } else {
        setGreeting("Buenas noches");
        setSticker("🌙");
      }
    };

    updateClock(); // Llamada inicial
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 id="saludos" className="text-4xl font-bold text-white">
        {greeting} {sticker}
      </h1>
      <h3 id="time" className="text-4xl font-bold text-white">
        {time}
      </h3>
    </div>
  );
};

export default Clock;
