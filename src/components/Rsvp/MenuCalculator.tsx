import { useState } from 'react';
import { rsvp } from '../../data/content';
import MenuTotal from './MenuTotal';
import Stepper from './Stepper';

/**
 * Calculadora de la tarjeta: cada familia elige cuántos adultos y niños van y ve cuánto
 * transferir. Funciona sola, sin depender de la confirmación (que puede estar cerrada).
 */
export default function MenuCalculator() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="calculator">
      <h3 className="calculator__title">
        Calculá tu <em>tarjeta</em>
      </h3>
      <p className="body calculator__intro">
        Elegí cuántos adultos y niños son en tu familia y te mostramos el total para transferir.
      </p>
      <div className="form__row calculator__steppers">
        <Stepper
          id="calc-adults"
          label="Adultos"
          hint="Contándote a vos"
          value={adults}
          min={1}
          max={rsvp.maxAdults}
          onChange={setAdults}
        />
        <Stepper
          id="calc-children"
          label="Niños"
          hint="Menú infantil"
          value={children}
          max={rsvp.maxChildren}
          onChange={setChildren}
        />
      </div>
      <MenuTotal adults={adults} children={children} live />
    </div>
  );
}
