export function formatCurrencyMask(value: string): string {
  const digits = value.replace(/\D/g, '')

  if (!digits) {
    return ''
  }

  const number = Number(digits) / 100

  if (isNaN(number)) {
    return ''
  }

  return number.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function parseCurrency(value: string): number {
  return parseFloat(value.replace(/\./g, '').replace(',', '.').replace('R$', '')) || 0
}

/*
 * currency utils
 
 * formatCurrencyMask: converte string de dígitos em valor monetário formatado (pt-BR)
 *   ex: "500000" → "5.000,00" — remove não-dígitos, divide por 100 e aplica toLocaleString
 
 * parseCurrency: converte string formatada em número
 *   ex: "R$ 5.000,00" → 5000 — remove "R$", pontos e troca vírgula por ponto; retorna 0 se inválido
 */