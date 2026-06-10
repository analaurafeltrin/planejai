interface StepProgressProps {
  // definindo quais props esse componente vai receber
  currentStep: number
  totalSteps: number
}

export function StepProgress({ currentStep, totalSteps }: StepProgressProps) {
  const progress = (currentStep / totalSteps) * 100
  // dividindo uma step pela outra e * por 100 pra dar valor de porcentagem

  return (
    <div className="mb-4">
      <p className="text-muted-foreground mb-2 text-sm">
        Passo {currentStep} de {totalSteps}
      </p>
      <div className="bg-border h-1 w-full overflow-hidden rounded-full">
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-label={`Passo ${totalSteps} de ${totalSteps}`}
          className="bg-primary h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
