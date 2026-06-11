import type { SimulationFormData } from '../data/simulation'
import { parseCurrency } from './currency'

export function calcMonthlySavings(data: SimulationFormData) {
  return parseCurrency(data.income) - parseCurrency(data.expenses) - parseCurrency(data.debts)
}

/* calcMonthlySavings
 
 * Calcula o valor disponível por mês para poupar:
 * income - expenses - debts (todos convertidos de string para número via parseCurrency)
 */
