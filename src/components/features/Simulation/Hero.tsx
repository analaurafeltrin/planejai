import PiggyBankImage from '@/assets/images/piggy-bank.png';

export function SimulationHero() {
  return (
    <div className="mb-8 text-center">
      <div>
        <h1>Vamos planejar seu futuro</h1>
        <img
          src={PiggyBankImage}
          alt=""
          aria-hidden="true"
          className="h-16 w-16 sm:-mt-2 sm:-ml-3"
        />
      </div>
      <p className="text-muted-foreground text-sm">
        Responda algumas questões para ter insights financeiros personalizado
      </p>
    </div>
  );
}
