import { SimulationForm } from '@/components/features/Simulation/Form';
import { SimulationHero } from '@/components/features/Simulation/Hero';

export function SimulationFormPage() {
  return (
    <main className="max-w-x1 mx-auto px-4 py-10 sm:py-14">
      <SimulationHero />
      <SimulationForm />
    </main>
  );
}
