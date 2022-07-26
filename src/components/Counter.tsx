import { useCounter } from 'usehooks-ts';

export default function Counter({ initial }: { initial: number }) {
  const { count, increment, decrement } = useCounter(initial);

  return (
    <>
      <div>
        {count}
        <button className="inc" onClick={() => increment()}>
          +
        </button>
        <button className="dec" onClick={() => decrement()}>
          -
        </button>
      </div>
    </>
  );
}
