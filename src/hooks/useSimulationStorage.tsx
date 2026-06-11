import { type SimulationFormData, type SimulationRecord } from '@/data/simulation'

const LOCAL_STORAGE_KEY = 'simulation-data'

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    const id = crypto.randomUUID()
    const record: SimulationRecord = { ...formData, id }

    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...savedData, record]))

    return id
  }

  const getFormData = (id: string) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (!storage) {
      return null
    }

    const savedData = JSON.parse(storage) as SimulationRecord[]
    return savedData.find((record) => record.id === id) || null
  }

  const updateSimulation = (id: string, data: SimulationRecord) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
    const savedData = storage ? (JSON.parse(storage) as SimulationRecord[]) : []

    const updated = savedData.map((record) => (record.id === id ? { ...data } : record))

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated))
  }

  return { saveFormData, getFormData, updateSimulation }
}

/*
 * useSimulationStorage
 
 * Hook para persistir e recuperar simulações no localStorage (chave: 'simulation-data').
 
 * - saveFormData: recebe SimulationFormData, gera um UUID, monta um SimulationRecord,
 *   anexa ao array existente e salva; retorna o id gerado
 * - getFormData: busca um SimulationRecord pelo id; retorna o registro ou null
 * - updateSimulation: substitui o registro com o id correspondente pelos novos dados
 */
