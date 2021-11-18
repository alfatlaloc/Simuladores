const MAXIMA_LONGITUD = 20;
export const numerosFlotantes = (cadena: string) => {
  if (cadena.length > MAXIMA_LONGITUD) return false;
  if (cadena === "") return true;
  if (/^\d+\.?\d*$/.test(cadena))
    if (Number.parseFloat(cadena) > 0) return true;
  return false;
};

export const numerosFlotantesConCero = (cadena: string) => {
  if (cadena.length > MAXIMA_LONGITUD) return false;
  if (cadena === "") return true;
  if (/^\d+\.?\d*$/.test(cadena)) return true;
  return false;
};

export const numerosEnteros = (cadena: string) => {
  if (cadena.length > MAXIMA_LONGITUD) return false;
  if (cadena === "") return true;
  if (/^\d+$/.test(cadena)) if (Number.parseInt(cadena) > 0) return true;
  return false;
};

export const numerosEnterosConCero = (cadena: string) => {
  if (cadena.length > MAXIMA_LONGITUD) return false;
  if (cadena === "") return true;
  if (/^\d+$/.test(cadena)) return true;
  return false;
};
