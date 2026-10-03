import { useEffect, useRef, useState, type FormEvent } from 'react';
import { rsvp } from '../../data/content';
import { revealDelay, useReveal } from '../../hooks/useReveal';
import { menuTotal } from '../../lib/menus';
import { clearSavedRsvp, savedRsvp, submitRsvp, type RsvpResponse } from '../../lib/rsvp';
import Icon from '../ui/Icon';
import SectionHead from '../ui/SectionHead';
import MenuCalculator from './MenuCalculator';
import MenuTotal from './MenuTotal';
import Stepper from './Stepper';
import './Rsvp.css';

/** El plazo se evalúa al cargar la página: no hace falta tocar nada cuando vence. */
const closed = Date.now() > new Date(rsvp.deadlineDate).getTime();

type Status = 'idle' | 'sending' | 'error';
type Errors = Partial<Record<'name' | 'attending', string>>;

export default function Rsvp() {
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState<RsvpResponse | null>(savedRsvp);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState<RsvpResponse | null>(null);
  const [attending, setAttending] = useState<'yes' | 'no' | ''>('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const nameInput = useRef<HTMLInputElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const justSent = useRef(false);

  // Tras enviar, el foco pasa al mensaje de confirmación para que se anuncie.
  useEffect(() => {
    if (sent && justSent.current) {
      resultHeading.current?.focus();
      justSent.current = false;
    }
  }, [sent]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();

    const next: Errors = {};
    if (name.length < 2) next.name = 'Escribí tu nombre y apellido.';
    if (!attending) next.attending = 'Elegí una opción para que sepamos si venís.';
    setErrors(next);
    if (next.name) {
      nameInput.current?.focus();
      return;
    }
    if (next.attending) {
      document.getElementById('rsvp-yes')?.focus();
      return;
    }

    const response: RsvpResponse = {
      name,
      attending: attending as 'yes' | 'no',
      adults: attending === 'yes' ? adults : 0,
      children: attending === 'yes' ? children : 0,
      total: attending === 'yes' ? menuTotal(adults, children).total : 0,
      dietary: attending === 'yes' ? String(data.get('dietary') ?? '').trim() : '',
      message: String(data.get('message') ?? '').trim(),
      sentAt: new Date().toISOString(),
    };

    setStatus('sending');
    try {
      await submitRsvp(response);
      justSent.current = true;
      setStatus('idle');
      setSent(response);
    } catch {
      setStatus('error');
    }
  };

  const editAnswer = () => {
    clearSavedRsvp();
    if (sent) {
      setDraft(sent);
      setAttending(sent.attending);
      setAdults(Math.max(1, sent.adults));
      setChildren(sent.children);
    }
    setSent(null);
    requestAnimationFrame(() => nameInput.current?.focus());
  };

  const firstName = sent?.name.split(' ')[0];

  return (
    <section className="section section--paper rsvp" id="confirmar" ref={ref} aria-labelledby="confirmar-title">
      <div className="container rsvp__grid">
        <div className="rsvp__aside">
          <SectionHead index="08" eyebrow="Confirmación" id="confirmar-title" title={[rsvp.title[0], <em key="r">{rsvp.title[1]}</em>]} />
          <p className="body rsvp__intro" data-reveal style={revealDelay(0.2)}>
            {closed ? rsvp.closedText : rsvp.intro}
          </p>
          <p className={`rsvp__deadline${closed ? ' rsvp__deadline--closed' : ''}`} data-reveal style={revealDelay(0.28)}>
            <span className="label">{closed ? 'Cerró el' : 'Confirmá antes del'}</span>
            <span>{rsvp.deadlineLabel}</span>
          </p>
        </div>

        <div className="rsvp__panel" data-reveal style={revealDelay(0.15)}>
          {closed ? (
            <MenuCalculator />
          ) : sent ? (
            <div className="rsvp__done">
              <span className="rsvp__done-mark" aria-hidden="true">
                <Icon name="check" />
              </span>
              <h3 className="rsvp__done-title" tabIndex={-1} ref={resultHeading}>
                {sent.attending === 'yes' ? (
                  <>
                    ¡Gracias, <em>{firstName}</em>!
                  </>
                ) : (
                  <>
                    Te vamos a extrañar, <em>{firstName}</em>
                  </>
                )}
              </h3>
              <p className="body">
                {sent.attending === 'yes'
                  ? 'Recibimos tu confirmación. Nos vemos el 4 de diciembre.'
                  : 'Gracias por avisarnos. Vamos a brindar por vos.'}
              </p>
              {sent.attending === 'yes' && sent.dietary && (
                <dl className="rsvp__summary">
                  <div>
                    <dt className="label">Alimentación</dt>
                    <dd>{sent.dietary}</dd>
                  </div>
                </dl>
              )}
              {sent.attending === 'yes' && <MenuTotal adults={sent.adults} children={sent.children} />}
              <button type="button" className="text-link rsvp__edit" onClick={editAnswer}>
                Modificar mi respuesta
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className={`field${errors.name ? ' field--error' : ''}`}>
                <label className="label field__label" htmlFor="rsvp-name">
                  Nombre y apellido
                </label>
                <input
                  ref={nameInput}
                  className="field__input"
                  id="rsvp-name"
                  name="name"
                  autoComplete="name"
                  autoCapitalize="words"
                  defaultValue={draft?.name}
                  aria-invalid={!!errors.name}
                  onInput={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
                  aria-describedby={errors.name ? 'rsvp-name-error' : undefined}
                />
                {errors.name && (
                  <p className="field__error" id="rsvp-name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <fieldset
                className={`field choice${errors.attending ? ' field--error' : ''}`}
                aria-describedby={errors.attending ? 'rsvp-attending-error' : undefined}
              >
                <legend className="label field__label">¿Vas a venir?</legend>
                <div className="choice__options">
                  <label className="choice__option">
                    <input
                      id="rsvp-yes"
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={attending === 'yes'}
                      onChange={() => {
                        setAttending('yes');
                        setErrors((e) => ({ ...e, attending: undefined }));
                      }}
                    />
                    <span className="choice__box">
                      <span className="choice__title">Sí, ahí estaré</span>
                      <span className="choice__hint">Con mucha alegría</span>
                    </span>
                  </label>
                  <label className="choice__option">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={attending === 'no'}
                      onChange={() => {
                        setAttending('no');
                        setErrors((e) => ({ ...e, attending: undefined }));
                      }}
                    />
                    <span className="choice__box">
                      <span className="choice__title">No podré ir</span>
                      <span className="choice__hint">Los acompaño de lejos</span>
                    </span>
                  </label>
                </div>
                {errors.attending && (
                  <p className="field__error" id="rsvp-attending-error">
                    {errors.attending}
                  </p>
                )}
              </fieldset>

              {/* Solo si viene: cuántos y qué comen. Se despliega en vez de aparecer de golpe. */}
              <div className={`form__reveal${attending === 'yes' ? ' is-open' : ''}`} inert={attending !== 'yes'}>
                <div className="form__reveal-inner">
                  <div className="form__row">
                    <Stepper
                      id="rsvp-adults"
                      label="Adultos"
                      hint="Contándote a vos"
                      value={adults}
                      min={1}
                      max={rsvp.maxAdults}
                      onChange={setAdults}
                    />
                    <Stepper
                      id="rsvp-children"
                      label="Niños"
                      hint="Menú infantil"
                      value={children}
                      max={rsvp.maxChildren}
                      onChange={setChildren}
                    />
                  </div>

                  <MenuTotal adults={adults} children={children} live />

                  <div className="field">
                    <label className="label field__label" htmlFor="rsvp-dietary">
                      Restricciones alimentarias
                    </label>
                    <input
                      className="field__input"
                      id="rsvp-dietary"
                      name="dietary"
                      defaultValue={draft?.dietary}
                      placeholder="Vegetariano, celíaco, alergias…"
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label field__label" htmlFor="rsvp-message">
                  Un mensaje para los novios <span className="field__optional">(opcional)</span>
                </label>
                <textarea
                  className="field__input field__textarea"
                  id="rsvp-message"
                  name="message"
                  rows={3}
                  defaultValue={draft?.message}
                />
              </div>

              {status === 'error' && (
                <p className="form__error" role="alert">
                  No pudimos enviar tu respuesta. Revisá tu conexión y probá de nuevo.
                </p>
              )}

              <button type="submit" className="btn btn--solid form__submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    <span className="form__spinner" aria-hidden="true" />
                    Enviando
                  </>
                ) : (
                  <>
                    Enviar confirmación
                    <Icon name="arrowRight" className="btn__icon btn__icon--nudge" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
