export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        -
      </button>
      <span className="w-6 text-center">{quantity}</span>
      <button
        onClick={onIncrease}
        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}

type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};