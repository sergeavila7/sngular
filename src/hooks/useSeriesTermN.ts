import { ChangeEvent, useRef, useState } from 'react';


export class SerieN {
  constructor() {}

  primo(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  triangular(n: number): number {
    return (n * (n + 1)) / 2;
  }

  fibonacci(n: number): number {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
  }

  calculateSerie(n: number) {
    if (n <= 2)
      return ' El valor de n debe ser mayor que 2 para calcular la serie.';

    const primoN: boolean = this.primo(n + 3);
    const triangularN: number = this.triangular(n - 1);
    const fibonacciN: number = this.fibonacci(n - 2);

    return ((primoN ? 1 : 0) * triangularN) / fibonacciN;
  }
}

const useSeriesTermN = () => {
  const [result, setResult] = useState<number | string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debounceRef = useRef<NodeJS.Timeout | undefined>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setResult('')
    const value = parseInt(event.target.value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setIsLoading(true)
    debounceRef.current = setTimeout(() => {
      const calculateResult = calculateSerie(value);
      setResult(calculateResult);
      setIsLoading(false)
    }, 2000);
  };

  const serieCalculator = new SerieN();
  const calculateSerie = (n: number): string | number => {
    const result = serieCalculator.calculateSerie(n);
    return typeof result === 'number' ? result : String(result);
  };
  return {calculateSerie, onQueryChanged, result, isLoading};
};

export default useSeriesTermN;
