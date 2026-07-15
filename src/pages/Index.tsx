import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroHouse from '@/assets/hero-house.jpg';

const HERO_IMG = heroHouse;
const INTERIOR_IMG = 'https://cdn.poehali.dev/projects/2483af7b-5941-4eb5-b993-802611dd1636/files/c0380f4b-a03f-43e9-af60-3543be184f3c.jpg';

const advantages = [
  { icon: 'ShieldCheck', title: 'Долговечность', text: 'Клеёный брус и каркас служат более 100 лет без потери геометрии. Гарантия на конструкцию — 25 лет.' },
  { icon: 'Thermometer', title: 'Теплозащита', text: 'Переживаете из‑за роста тарифов? В норвежском доме затраты на отопление в 9 раза ниже — вы спокойно переходите на электричество: перерасхода электроэнергии не будет!' },
  { icon: 'Leaf', title: 'Экологичность', text: 'Строим из северной сосны и ели, применяем натуральные пропитки. Исключили формальдегид и токсичные клеи — контролируем каждый этап на своём производстве.' },
  { icon: 'Timer', title: 'Скорость', text: 'Мы соберём дом за 3 дня, а за месяц пройдём весь путь — от фундамента до готового жилья: просто заезжайте и живите.' },
];

const projects = [
  { name: 'Тромсё', area: 98, price: 'от 990 000 ₽', tag: 'Компактный' },
  { name: 'Фьорд', area: 142, price: 'от 1 690 000 ₽', tag: 'Одноэтажный' },
  { name: 'Лофотен', area: 165, price: 'от 2 290 000 ₽', tag: 'Панорамный' },
  { name: 'Берген', area: 186, price: 'от 2 890 000 ₽', tag: 'С мансардой' },
  { name: 'Осло', area: 224, price: 'от 3 590 000 ₽', tag: 'Двухэтажный' },
  { name: 'Нордкап', area: 268, price: 'от 4 490 000 ₽', tag: 'Премиум' },
];

const steps = [
  { n: '01', title: 'Заявка и расчёт', text: 'Высылаем готовые дома и цены, или рассчитаем индивидуальный проект.' },
  { n: '02', title: 'Договор', text: 'Подписание договора за несколько минут через ГосУслуги.' },
  { n: '03', title: 'Фундамент', text: 'План и схема свайно-винтового фундамента с обвязкой под ваш участок.' },
  { n: '04', title: 'Сборка', text: 'Доставляем и возводим ваш дом в кратчайшие сроки.' },
  { n: '05', title: 'Отделка', text: 'Делаем инженерные системы, утепление, черновую отделку, окна и двери.' },
  { n: '06', title: 'Дом готов', text: 'Подписание акта приема-передачи и вручение ключей.' },
];

const reviews = [
  { name: 'Андрей Лебедев', role: 'Дом «Берген», 186 м²', text: 'Заехали в срок, без переносов. Зимой при −25 °C отопление обошлось дешевле, чем в городской квартире.' },
  { name: 'Марина Соколова', role: 'Дом «Фьорд», 142 м²', text: 'Понравилась честная смета — итог совпал с расчётом до рубля. Дизайн внутри именно скандинавский, как хотели.' },
  { name: 'Игорь Васнецов', role: 'Дом «Осло», 224 м²', text: 'Строили второй дом уже у этой команды. Качество бруса и окон — на уровне европейских проектов.' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <span className="font-logo text-2xl font-black tracking-wide text-primary">ЗащитинСТРОЙ</span>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#advantages" className="hover:text-foreground transition-colors">Преимущества</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Проекты</a>
            <a href="#steps" className="hover:text-foreground transition-colors">Этапы</a>
            <a href="#about" className="hover:text-foreground transition-colors">О компании</a>
            <a href="#contacts" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button asChild size="sm" className="rounded-none">
            <a href="#contacts">Связаться</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-end">
        <img src={HERO_IMG} alt="Норвежский дом" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-foreground/10" />
        <div className="container relative pb-24 animate-fade-in">
          <h1 className="text-background text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl leading-[1.05]">
            Дом, где царит тепло
          </h1>
          <p className="inline-block bg-foreground/50 backdrop-blur-sm text-background text-lg md:text-xl max-w-2xl mt-6 font-light px-6 py-4 rounded-3xl">
            Хотите забыть о счетах за отопление? Норвежский дом держит тепло в 4 раза лучше — чем дом из бруса, и в 12 раз больше — чем кирпичный. Комфорт без переплат круглый год!
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button asChild size="lg" className="rounded-none text-base px-8 h-14">
              <a href="#contacts">Рассчитать стоимость</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none text-base px-8 h-14 bg-transparent text-background border-background/60 hover:bg-background hover:text-foreground">
              <a href="#projects">Смотреть проекты</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="container py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-accent tracking-[0.25em] text-xs uppercase mb-4">Почему норвежские дома</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Тепло, тишина и долговечность северного климата</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {advantages.map((a) => (
            <div key={a.title} className="bg-card p-8 lg:p-10">
              <Icon name={a.icon} size={32} className="text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-3">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
        <p className="font-semibold text-lg text-center mt-12">Мы аккредитованная компания во всех банках и наши дома подходят под Материнский Капитал, Военную Ипотеку, Семейную Ипотеку, рассрочку.</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-secondary py-24 md:py-32">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-accent tracking-[0.25em] text-xs uppercase mb-4">Наши проекты</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Готовые решения под любой участок</h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">Любой проект адаптируем под ваши планировку и бюджет.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={p.name} className="group bg-card border border-border overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={i % 2 === 0 ? HERO_IMG : INTERIOR_IMG} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-background/90 text-foreground text-xs px-3 py-1 tracking-wide">{p.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <span className="text-sm text-muted-foreground">{p.area} м²</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{p.price}</span>
                    <Button variant="ghost" size="sm" className="rounded-none text-accent hover:text-accent">
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="container py-24 md:py-32">
        <div className="max-w-2xl mb-16">
          <p className="text-accent tracking-[0.25em] text-xs uppercase mb-4">Этапы строительства</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">От идеи до ключей в руках - прозрачно и честно на каждом шаге</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-foreground pt-5">
              <span className="text-3xl font-extrabold text-accent">{s.n}</span>
              <h3 className="text-lg font-semibold mt-3 mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary-foreground/60 tracking-[0.25em] text-xs uppercase mb-4">Надежное сопровождение</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Дом «под ключ» без хлопот</h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">Хотите дом, который идеально впишется в вашу жизнь? Мы создадим для вас уникальный проект — без типовых шаблонов.</p>
            <ul className="space-y-6">
              {[
                ['Home', 'Индивидуальный проект дома', 'Без типовых шаблонов, под ваш образ жизни.'],
                ['Plug', 'Все коммуникации', 'Электричество, водоснабжение, канализация, отопление: проложим и подключим, оформим лицевые счета.'],
                ['Paintbrush', 'Внутренняя и внешняя отделка', 'Качественные материалы, единый стиль, долговечные решения.'],
                ['Palette', 'Дизайн-проект', 'Планировка, цветовые решения, расстановка мебели.'],
                ['Trees', 'Ландшафт и благоустройство территории', 'Планировка участка, дорожки, зоны отдыха, озеленение.'],
                ['Scale', 'Юридическое сопровождение и постановка на учёт', 'Оформление документов, регистрация дома, минимизация рисков. С вашими документами работает отдельный юрист.'],
              ].map(([icon, title, text]) => (
                <li key={title} className="flex gap-4">
                  <Icon name={icon} size={24} className="text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={INTERIOR_IMG} alt="Интерьер" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="font-semibold text-lg text-center container mt-16">Это выгодно, так как у нас собственное производство домов и мы напрямую сотрудничаем с заводами-изготовителями. Сравните цены на рынке и убедитесь.</p>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent tracking-[0.25em] text-xs uppercase mb-4">О компании</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">Строим скандинавские дома с 2015 года</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Технология наших домов пришла напрямую из Норвегии: в 90‑х отец строил дома в Тромсё и перенял подход, где тепло и комфорт закладываются не отделкой, а самой конструкцией. В 1998 году он создал одно из первых производств в России, чтобы адаптировать эти принципы к нашим зимам.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Сейчас я развиваю это направление, сохраняя ключевые инженерные решения и строго контролируя каждый этап вместе с отцом. Это не просто «скандинавский стиль» — это проверенная система, которая реально экономит на отоплении и служит десятилетиями. Для нас качество — не рекламный ход, а личная ответственность перед клиентами и перед именем семьи.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border border border-border self-start">
            {[
              ['1000+', 'домов сдано'],
              ['1998', 'год основания'],
            ].map(([num, label]) => (
              <div key={label} className="bg-card p-8">
                <div className="text-3xl md:text-4xl font-extrabold text-accent mb-2">{num}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-accent tracking-[0.25em] text-xs uppercase mb-4">Отзывы</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Что говорят владельцы наших домов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border p-8 flex flex-col">
                <Icon name="Quote" size={28} className="text-accent mb-5" />
                <p className="text-foreground/90 leading-relaxed mb-8 flex-1">{r.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent tracking-[0.25em] text-xs uppercase mb-4">Контакты</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10">Нажмите "Рассчитать", чтобы начать новую жизнь</h2>
            <div className="space-y-6">
              <a href="tel:+78001234567" className="flex items-center gap-4 group">
                <Icon name="Phone" size={20} className="text-accent" />
                <span className="text-lg group-hover:text-accent transition-colors">+7 (800) 123-45-67</span>
              </a>
              <a href="mailto:hello@nordhus.ru" className="flex items-center gap-4 group">
                <Icon name="Mail" size={20} className="text-accent" />
                <span className="text-lg group-hover:text-accent transition-colors">hello@nordhus.ru</span>
              </a>
              <div className="flex items-center gap-4">
                <Icon name="MapPin" size={20} className="text-accent" />
                <span className="text-lg">Московская обл., г. Коломна, ул. Митяево, 156</span>
              </div>
            </div>
          </div>
          <form className="bg-secondary p-8 md:p-10 space-y-5">
            <h3 className="text-xl font-semibold mb-2">Оставить заявку</h3>
            <Input placeholder="Имя" className="rounded-none h-12 bg-card border-border" />
            <Input placeholder="Телефон" type="tel" className="rounded-none h-12 bg-card border-border" />
            <Input placeholder="Желаемая площадь дома, м²" className="rounded-none h-12 bg-card border-border" />
            <Button type="submit" size="lg" className="w-full rounded-none h-14 text-base">Рассчитать стоимость</Button>
            <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-primary-foreground/60 text-sm">© 2026 ЗащитинСТРОЙ — норвежские дома под ключ</p>
            <p className="text-primary-foreground/40 text-xs mt-1">Все права защищены. Информация, представленная на сайте не является публичной офертой</p>
          </div>
          <div>
            <span className="font-logo text-lg font-black tracking-wide">ЗащитинСТРОЙ</span>
            <p className="text-primary-foreground/40 text-xs mt-1">Индивидуальный Предприниматель Защитин Дмитрий Андреевич,<br />ИНН 502213600994, ОГРНИП 326508100252686</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;