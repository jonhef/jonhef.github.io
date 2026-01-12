const stack = [
  'React',
  'TypeScript',
  'Vite',
  'Node',
  'CSS/GSAP',
  'REST/GraphQL',
  'UI Prototyping',
  'Retro UX',
]

function About() {
  return (
    <section className="panel" id="about">
      <div className="panel-header">
        <h2 className="section-title">ABOUT</h2>
        <span className="panel-status">SYS/01</span>
      </div>
      <div className="panel-body">
        <p>
          Пишу интерфейсы на React, люблю, когда дизайн дышит и ведёт себя как
          электронная музыка: чёткий ритм, дозированные всплески и немного
          артефактов. В работе ценю ясные данные, быстрые сборки и простые
          переходы от идеи к прототипу.
        </p>
        <p>
          Часто подключаю анимации, настраиваю сборку под конкретные задачи,
          автоматизирую рутинные штуки и вылизываю детали: состояния загрузки,
          мелкие hover-эффекты, микро-копирайтинг.
        </p>
      </div>

      <div className="chip-row">
        {stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
