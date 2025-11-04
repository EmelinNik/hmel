const pillars = [
  {
    title: 'Точки роста',
    description:
      'Обсуждаем развитие городской цифровой среды, транспорт, сервисы и аналитические платформы.',
  },
  {
    title: 'Практика и кейсы',
    description:
      'Разбираем успешные внедрения от партнёров и городских команд. Живые примеры, цифры и выводы.',
  },
  {
    title: 'Сообщество',
    description:
      'Знакомимся, обсуждаем совместные проекты и ищем партнёров в зонах нетворкинга и на закрытых митапах.',
  },
];

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section__head">
        <span className="section__eyebrow">О событии</span>
        <h2>Переосмысливаем сервисы мегаполиса</h2>
        <p>
          HMEL Tech Conference объединяет продуктовые команды, урбанистов, банки и стартапы,
          чтобы совместно строить цифровые сервисы нового поколения. Здесь рождаются идеи и
          партнёрства, влияющие на повседневную жизнь горожан.
        </p>
      </div>
      <div className="about__grid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="about__card">
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
