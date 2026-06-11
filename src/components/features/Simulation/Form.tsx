import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { type SimulationFormData, simulationFormSteps } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'

import { FormStep } from './FormStep'
import { StepProgress } from './Progress'

export const SimulationForm = () => {
  const { saveFormData } = useSimulationStorage()
  const navigate = useNavigate()

  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<SimulationFormData>({} as SimulationFormData)
  const totalSteps = simulationFormSteps.length
  const currentStep = simulationFormSteps[currentStepIndex]

  const handleNextStep = (value: string) => {
    const updatedFormData = { ...formData, [currentStep.id]: value }
    setFormData(updatedFormData)

    console.log({ updatedFormData })

    if (currentStepIndex + 1 > totalSteps - 1) {
      const id = saveFormData(updatedFormData)
      void navigate(`/resultado/${id}`)
      return
    }

    setCurrentStepIndex((prev) => prev + 1)
  }

  const handlePreviousStep = () => {
    if (currentStepIndex === 0) {
      return
    }

    setCurrentStepIndex((prev) => prev - 1)
  }

  return (
    <>
      <StepProgress currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePreviousStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
      />
    </>
  )
}
/* 
    Formulário multi-etapas para simulação.
 *
 * - Controla o passo atual e os dados acumulados do formulário via useState
 * - handleNextStep: salva o valor da etapa atual no formData; 
 * se for a última etapa, persiste os dados (useSimulationStorage) e navega para /resultado/:id;
 *   caso contrário, avança para o próximo passo
 * - handlePreviousStep: volta ao passo anterior (sem ação no primeiro passo)
 * - Renderiza StepProgress (barra de progresso) e FormStep (etapa atual),
 *   ocultando o botão "Voltar" na primeira etapa
 */
