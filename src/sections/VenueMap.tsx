const VenueMap = () => {
  return (
    <section className="section venue" id="venue">
      <div className="venue__content">
        <div className="section__head">
          <span className="section__eyebrow">Локация</span>
          <h2>Москва, Международный дом музыки</h2>
          <p>
            Зал «Святительский», Космодамианская наб. 52, стр. 8. На площадке работают стойки
            регистрации, гардероб и зона партнёров.
          </p>
          <ul className="venue__info">
            <li><strong>Метро:</strong> Павелецкая (5 минут пешком)</li>
            <li><strong>Время регистрации:</strong> с 09:00 ежедневно</li>
            <li><strong>Поддержка участников:</strong> hello@hmel.tech</li>
          </ul>
        </div>
        <div className="venue__map">
          <iframe
            title="Карта конференции HMEL"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a9d3e9e215ab8d41e4d37fa2a75c2f10e6df61793cf46f6a9e4a2f3bb5a0aad&amp;source=constructor"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
