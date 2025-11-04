import AccordionItem from '../components/Accordion';

const faq = [
  {
    question: 'Как зарегистрироваться и получить билет?',
    answer:
      'Оформите регистрацию на сайте conference.hmel.tech. После оплаты электронный билет придёт на вашу почту. На входе нужен QR-код и документ, удостоверяющий личность.',
  },
  {
    question: 'Будет ли онлайн-трансляция?',
    answer:
      'Да, для всех потоков предусмотрены прямые эфиры в мобильном приложении HMEL. Ссылки придут за день до начала конференции.',
  },
  {
    question: 'Есть ли скидки для стартапов и студентов?',
    answer:
      'Стартап-команды и студенты профильных вузов получают спецусловия. Напишите на partners@hmel.tech с презентацией проекта и документом, подтверждающим статус.',
  },
  {
    question: 'Как стать спикером или провести воркшоп?',
    answer:
      'Отправьте заявку на content@hmel.tech. Укажите тему, формат, ожидаемую аудиторию и краткое описание. Команда редакции ответит в течение недели.',
  },
];

const Faq = () => {
  return (
    <section className="section faq" id="faq">
      <div className="section__head">
        <span className="section__eyebrow">FAQ</span>
        <h2>Ответы на популярные вопросы</h2>
        <p>Если не нашли нужную информацию, напишите нам на hello@hmel.tech — мы поможем.</p>
      </div>
      <div className="faq__list">
        {faq.map((item) => (
          <AccordionItem key={item.question} title={item.question}>
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
};

export default Faq;
