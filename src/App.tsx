import { Input, SearchResults, Spinner } from './components';
import useSeriesTermN from './hooks/useSeriesTermN';

function App() {
  const { onQueryChanged, result, isLoading } = useSeriesTermN();
  const numericResult =
    typeof result === 'number' ? result : parseFloat(result);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between py-24'>
      <div>
        <h1 className='text-3xl font-bold'>Término n de la serie</h1>
        <div className='py-4'>
          <Input onChange={onQueryChanged} />
        </div>
        {isLoading && <Spinner />}
        {!isLoading && !isNaN(numericResult) ? (
          <SearchResults result={result} />
        ) : null}
      </div>
    </main>
  );
}

export default App;
