/**
 * Valor seguro para dangerouslySetInnerHTML: sempre string (nunca undefined),
 * compatível com texto simples ou campo estilo WordPress { rendered: "..." }.
 */
export function htmlContent(value) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object" && typeof value.rendered === "string") {
    return value.rendered;
  }
  return "";
}
