import React from 'react';
const e = React.createElement
export default function XSection() {
  return e(
    'section',
    null,
    e('h1', { className: 'centered' }, ' International Information Technologies University'),
   e(
      'h3',
      { className: 'centered' },
      'Международный университет информационных технологий ( IITU ) - единственный университет в Казахстане, получивший институциональную международную аккредитацию ASIIN. Университет готовит новое поколение специалистов в области ИКТ со знанием отраслевых технологий, передовым менеджментом, экономикой и коммуникативными навыками.'
    )
  
  /*<section>
  <h1 className="centered"> Result University </h1>
  <h3 className="centered" style = {{ color : '#666' }}> Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами </h3>
</section>*/

  );
}
