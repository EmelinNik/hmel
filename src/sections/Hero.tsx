const Hero = () => {
  return (
    <header className="hero">
      <div className="section hero__content">
        <div className="hero__badge">HMEL TECH CONFERENCE · 2025</div>
        <h1>
          Будущее городской экосистемы: <span>цифровые сервисы</span> для людей
        </h1>
        <p>
          14–16 ноября · Москва · Дом музыки. Три дня глубоких докладов, воркшопов
          и нетворкинга с лидерами отрасли финтех и городских сервисов.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#schedule">
            Смотреть программу
          </a>
          <a className="button button--ghost" href="#about">
            О событии
          </a>
        </div>
        <dl className="hero__meta">
          <div>
            <dt>Участников</dt>
            <dd>1500+</dd>
          </div>
          <div>
            <dt>Спикеров</dt>
            <dd>70</dd>
          </div>
          <div>
            <dt>Треки</dt>
            <dd>5 тематических треков</dd>
          </div>
        </dl>
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </header>
  );
};

export default Hero;
