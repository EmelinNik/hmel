import { useMemo, useState } from 'react';

type Session = {
  time: string;
  title: string;
  speaker: string;
  description: string;
};

type Hall = {
  id: string;
  label: string;
  sessions: Session[];
};

type Day = {
  id: string;
  label: string;
  halls: Hall[];
};

const schedule: Day[] = [
  {
    id: 'day1',
    label: '14 ноября · День стратегии',
    halls: [
      {
        id: 'main',
        label: 'Главная сцена',
        sessions: [
          {
            time: '10:00',
            title: 'Открытие конференции и приветствие мэра',
            speaker: 'Команда HMEL & правительство Москвы',
            description: 'Планы по развитию единой городской платформы и приоритеты на 2025 год.',
          },
          {
            time: '11:15',
            title: 'Как AI помогает управлять мегаполисом',
            speaker: 'Марина Климова · Chief Data Officer, UCity',
            description: 'От пилотов к массовому внедрению: прогнозирование транспорта и нагрузки сервисов.',
          },
          {
            time: '13:00',
            title: 'Кейсы внедрения суперприложений',
            speaker: 'Панель с участием VK, Мосметро, ХМЕЛЬ Банк',
            description: 'Обсуждаем стратегию единого UX и обмен данными между партнёрами.',
          },
        ],
      },
      {
        id: 'product',
        label: 'Продуктовый зал',
        sessions: [
          {
            time: '10:30',
            title: 'Сервисные карты жителей: что мы узнали за год',
            speaker: 'Екатерина Кулагина · Head of UX Research, HMEL',
            description: 'Методы исследований и работа с данными обратной связи из мобильного приложения.',
          },
          {
            time: '12:00',
            title: 'Комьюнити-дизайн для районов',
            speaker: 'Александр Соколов · СЕО, Neighbourhood',
            description: 'Как мы запустили 86 локальных чатов и снизили количество обращений на 23%.',
          },
        ],
      },
    ],
  },
  {
    id: 'day2',
    label: '15 ноября · День технологий',
    halls: [
      {
        id: 'main',
        label: 'Главная сцена',
        sessions: [
          {
            time: '10:00',
            title: 'Единая платформа платежей для города',
            speaker: 'Дмитрий Котов · CTO, HMEL Pay',
            description: 'Как мы построили надёжную инфраструктуру микросервисов для 7 млн пользователей.',
          },
          {
            time: '11:30',
            title: 'Безопасность данных и защита приватности',
            speaker: 'Людмила Власова · Director of Security, Digital Shield',
            description: 'Обмен данными между ведомствами и партнёрами: best practices и регуляторные требования.',
          },
          {
            time: '14:00',
            title: 'Observability-подход в городских сервисах',
            speaker: 'Сергей Дорошенко · DevOps Lead, HMEL Platform',
            description: 'Метрики, алерты, визуализация инцидентов и прогнозирование пиковых нагрузок.',
          },
        ],
      },
      {
        id: 'labs',
        label: 'Лаборатория',
        sessions: [
          {
            time: '10:15',
            title: 'Практикум по генеративному дизайну интерфейсов',
            speaker: 'Студия DeepUI',
            description: 'Собираем интерактивный прототип за 90 минут с помощью AI-инструментов.',
          },
          {
            time: '12:30',
            title: 'Воркшоп: аналитика потоков посетителей',
            speaker: 'Команда SmartCity',
            description: 'Распределяем нагрузки в павильонах и сервисных точках на основе датчиков.',
          },
        ],
      },
    ],
  },
  {
    id: 'day3',
    label: '16 ноября · День сообществ',
    halls: [
      {
        id: 'main',
        label: 'Главная сцена',
        sessions: [
          {
            time: '10:30',
            title: 'Городские экосистемы: взгляд инвесторов',
            speaker: 'Фонд "Город будущего", HMEL Ventures, AccelCity',
            description: 'Какие проекты ищут инвестиции и какие метрики важны на ранней стадии.',
          },
          {
            time: '12:00',
            title: 'Города и креативные индустрии',
            speaker: 'Панель с участием VK Music, МТС Live, Центра "Град"',
            description: 'Как события и культура усиливают цифровые продукты и монетизацию.',
          },
        ],
      },
      {
        id: 'community',
        label: 'Комьюнити-зал',
        sessions: [
          {
            time: '11:00',
            title: 'Кластер нетворкинг: стартапы × корпорации',
            speaker: 'Модератор: Анна Разумова',
            description: 'Питчем идеи партнёрам, ищем пилоты и формируем дорожные карты сотрудничества.',
          },
          {
            time: '13:30',
            title: 'Закрытый круглый стол CIO',
            speaker: 'Лидеры IT-служб крупных девелоперов',
            description: 'Обсуждаем совместимые стандарты и единый каталог сервисов для жителей.',
          },
        ],
      },
    ],
  },
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(schedule[0].id);
  const [activeHall, setActiveHall] = useState(schedule[0].halls[0].id);

  const halls = useMemo(() => schedule.find((day) => day.id === activeDay)?.halls ?? [], [activeDay]);
  const sessions = useMemo(
    () => halls.find((hall) => hall.id === activeHall)?.sessions ?? [],
    [halls, activeHall]
  );

  const hallsPanelId = 'schedule-halls-panel';
  const sessionsPanelId = 'schedule-sessions-panel';

  return (
    <section className="section schedule" id="schedule">
      <div className="section__head">
        <span className="section__eyebrow">Расписание</span>
        <h2>Три дня, пять треков, бесконечные инсайты</h2>
        <p>
          Выбирайте интересующий день и зал — программа обновляется в реальном времени. На
          площадке работают стримы и чаты для удалённых участников.
        </p>
      </div>
      <div className="schedule__tabs" role="tablist" aria-label="Дни конференции">
        {schedule.map((day) => (
          <button
            key={day.id}
            type="button"
            className={`tab ${activeDay === day.id ? 'is-active' : ''}`}
            onClick={() => {
              setActiveDay(day.id);
              setActiveHall(day.halls[0].id);
            }}
            role="tab"
            aria-selected={activeDay === day.id}
            aria-controls={hallsPanelId}
            id={`day-tab-${day.id}`}
          >
            {day.label}
          </button>
        ))}
      </div>
      <div
        id={hallsPanelId}
        role="tabpanel"
        aria-labelledby={`day-tab-${activeDay}`}
        className="schedule__panel"
      >
        <div className="schedule__tabs schedule__tabs--sub" role="tablist" aria-label="Залы">
          {halls.map((hall) => (
            <button
              key={hall.id}
              type="button"
              className={`tab ${activeHall === hall.id ? 'is-active' : ''}`}
              onClick={() => setActiveHall(hall.id)}
              role="tab"
              aria-selected={activeHall === hall.id}
              aria-controls={sessionsPanelId}
              id={`hall-tab-${hall.id}`}
            >
              {hall.label}
            </button>
          ))}
        </div>
      </div>
      <div
        id={sessionsPanelId}
        role="tabpanel"
        aria-labelledby={`hall-tab-${activeHall}`}
        className="schedule__panel"
      >
        <div className="schedule__list" aria-live="polite">
          {sessions.map((session) => (
            <article key={session.time + session.title} className="schedule__item">
              <time>{session.time}</time>
              <div>
                <h3>{session.title}</h3>
                <p className="schedule__speaker">{session.speaker}</p>
                <p>{session.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
