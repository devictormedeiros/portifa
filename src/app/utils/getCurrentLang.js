export const getCurrentLang = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || "pt";
    }
    return "pt";
  };
  