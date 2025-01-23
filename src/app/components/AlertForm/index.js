import { Alert } from "@material-tailwind/react";
import { useState, useEffect } from "react";
export function AlertForm({ alertType = "information", alertText }) {
  const [visible, setVisible] = useState(true);
  const alerts = {
    information: {
      type: "blue",
      color: "blue",
      text: "Essa é uma mensagem informativa.",
    },
    error: {
      type: "red",
      color: "red",
      text: "Ocorreu um erro",
    },
    sucess: {
      type: "green",
      color: "green",
      text: "Sucesso!",
    },
    attention: {
      type: "amber",
      color: "amber",
      text: "Atenção",
    },
  };

  // Esconde o alerta após 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    // Limpa o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col gap-2 relative w-full">
      <Alert
        open={visible}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        color={alerts[alertType].color}
        className="absolute bottom-0 w-full"
      >
        {!alertText ? alerts[alertType].text : alertText}
      </Alert>
    </div>
  );
}
