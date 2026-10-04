import Icon from '../ui/Icon';

interface Props {
  id: string;
  label: string;
  hint?: string;
  value: number;
  min?: number;
  max: number;
  onChange: (value: number) => void;
}

/** Contador con botones grandes: más fácil de tocar en el celular que un campo numérico. */
export default function Stepper({ id, label, hint, value, min = 0, max, onChange }: Props) {
  const set = (next: number) => onChange(Math.max(min, Math.min(max, next)));

  return (
    <div className="stepper" role="group" aria-labelledby={`${id}-label`}>
      <p className="label field__label" id={`${id}-label`}>
        {label}
      </p>
      <div className="stepper__control">
        <button
          type="button"
          className="stepper__btn"
          onClick={() => set(value - 1)}
          disabled={value <= min}
          aria-label={`Quitar uno de ${label.toLowerCase()}`}
        >
          <Icon name="minus" />
        </button>
        <output className="stepper__value" id={id} aria-live="polite">
          {value}
        </output>
        <button
          type="button"
          className="stepper__btn"
          onClick={() => set(value + 1)}
          disabled={value >= max}
          aria-label={`Sumar uno a ${label.toLowerCase()}`}
        >
          <Icon name="plus" />
        </button>
      </div>
      {hint && <p className="stepper__hint">{hint}</p>}
    </div>
  );
}
