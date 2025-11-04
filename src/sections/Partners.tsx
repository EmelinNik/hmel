const partners = [
  { name: 'HMEL Bank', logo: '/assets/partner-hmel.svg' },
  { name: 'UCity', logo: '/assets/partner-ucity.svg' },
  { name: 'SmartCity', logo: '/assets/partner-smartcity.svg' },
  { name: 'DeepUI', logo: '/assets/partner-deepui.svg' },
  { name: 'Neighbourhood', logo: '/assets/partner-neighbourhood.svg' },
  { name: 'AccelCity', logo: '/assets/partner-accelcity.svg' },
];

const Partners = () => {
  return (
    <section className="section partners" id="partners">
      <div className="section__head">
        <span className="section__eyebrow">Партнёры</span>
        <h2>Экосистема, создающая будущее мегаполиса</h2>
        <p>
          Благодарим компании, которые поддерживают развитие городской цифровой среды и делятся
          опытом на конференции.
        </p>
      </div>
      <div className="partners__grid">
        {partners.map((partner) => (
          <div key={partner.name} className="partners__item">
            <img src={partner.logo} alt={partner.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
