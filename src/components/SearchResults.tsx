interface SearchResultsProps {
  result: number | string;
}

export const SearchResults = ({ result }: SearchResultsProps) => {
  return (
    <div>
      <p className='text-2xl font-semibold'>{result}</p>
    </div>
  );
};
