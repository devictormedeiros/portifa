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
    success: {
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
  const alertAnimation = {
    mount: { y: 0 },
    unmount: { y: 100 },
  };
  
  const selectedAlert = alerts[alertType] || alerts.information;

  // Esconde o alerta após 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    // Limpa o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full flex-col gap-2 relative">
      <Alert
        open={visible}
        animate={alertAnimation}
        color={selectedAlert.color}
        role="alert"
        className="absolute bottom-0 w-full"
      >
        {alertText || selectedAlert.text}
      </Alert>
    </div>
  );
}
