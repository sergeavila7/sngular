import { test } from 'vitest';
import { SerieN } from '../hooks/useSeriesTermN';

const serieCalculator = new SerieN();

test('n = 0', () => {
  const result = serieCalculator.calculateSerie(0);
  return (
    result === ' El valor de n debe ser mayor que 2 para calcular la serie.'
  );
});

test('n = 1', () => {
  const result = serieCalculator.calculateSerie(1);
  return (
    result === ' El valor de n debe ser mayor que 2 para calcular la serie.'
  );
});

test('n = 2', () => {
  const result = serieCalculator.calculateSerie(2);
  return (
    result === ' El valor de n debe ser mayor que 2 para calcular la serie.'
  );
});

test('n = 3', () => {
  const result = serieCalculator.calculateSerie(3);
  return (
    result ===
    ((serieCalculator.primo(3 + 3) ? 1 : 0) *
      serieCalculator.triangular(3 - 1)) /
      serieCalculator.fibonacci(3 - 2)
  );
});

test('n = 4', () => {
  const result = serieCalculator.calculateSerie(4);
  return (
    result ===
    ((serieCalculator.primo(4 + 3) ? 1 : 0) *
      serieCalculator.triangular(4 - 1)) /
      serieCalculator.fibonacci(4 - 2)
  );
});

test('n = 5', () => {
  const result = serieCalculator.calculateSerie(5);
  return (
    result ===
    ((serieCalculator.primo(5 + 3) ? 1 : 0) *
      serieCalculator.triangular(5 - 1)) /
      serieCalculator.fibonacci(5 - 2)
  );
});

test('n = 6', () => {
  const result = serieCalculator.calculateSerie(6);
  return (
    result ===
    ((serieCalculator.primo(6 + 3) ? 1 : 0) *
      serieCalculator.triangular(6 - 1)) /
      serieCalculator.fibonacci(6 - 2)
  );
});

test('n = 7', () => {
  const result = serieCalculator.calculateSerie(7);
  return (
    result ===
    ((serieCalculator.primo(7 + 3) ? 1 : 0) *
      serieCalculator.triangular(7 - 1)) /
      serieCalculator.fibonacci(7 - 2)
  );
});

test('n = 8', () => {
  const result = serieCalculator.calculateSerie(8);
  return (
    result ===
    ((serieCalculator.primo(8 + 3) ? 1 : 0) *
      serieCalculator.triangular(8 - 1)) /
      serieCalculator.fibonacci(8 - 2)
  );
});

test('n = 9', () => {
  const result = serieCalculator.calculateSerie(9);
  return (
    result ===
    ((serieCalculator.primo(9 + 3) ? 1 : 0) *
      serieCalculator.triangular(9 - 1)) /
      serieCalculator.fibonacci(9 - 2)
  );
});

test('n = 10', () => {
  const result = serieCalculator.calculateSerie(10);
  return (
    result ===
    ((serieCalculator.primo(10 + 3) ? 1 : 0) *
      serieCalculator.triangular(10 - 1)) /
      serieCalculator.fibonacci(10 - 2)
  );
});
