import { ReactNode, useId, useState } from 'react';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const baseId = useId();
  const buttonId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  return (
    <div className={`accordion__item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="accordion__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={buttonId}
      >
        <span>{title}</span>
        <span className="accordion__icon" aria-hidden="true">
          {isOpen ? '–' : '+'}
        </span>
      </button>
      <div
        className="accordion__panel"
        role="region"
        id={panelId}
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        hidden={!isOpen}
      >
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
