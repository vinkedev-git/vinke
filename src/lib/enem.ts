// Dias até o próximo ENEM (1º dia = primeiro domingo de novembro).
export function proximoEnem(): { ano: number; dias: number } {
  const hoje = new Date();
  for (const ano of [hoje.getFullYear(), hoje.getFullYear() + 1]) {
    const primeiroNov = new Date(ano, 10, 1, 12);
    const domingo = new Date(primeiroNov);
    domingo.setDate(1 + ((7 - primeiroNov.getDay()) % 7));
    if (domingo.getTime() >= hoje.getTime() - 12 * 60 * 60 * 1000) {
      const dias = Math.max(0, Math.ceil((domingo.getTime() - hoje.getTime()) / 86_400_000));
      return { ano, dias };
    }
  }
  return { ano: hoje.getFullYear() + 1, dias: 365 };
}
