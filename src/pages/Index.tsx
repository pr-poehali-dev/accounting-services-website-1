import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="Calculator" size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">БухПро</h1>
              <p className="text-sm text-muted-foreground">Профессиональная бухгалтерия</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-muted-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-br from-blue-50/90 via-white/90 to-blue-50/90"
        style={{
          backgroundImage: `url('/img/c5242fd0-70c9-4d57-99aa-d3fb250c8f6c.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ваша бухгалтерия<br />
            <span className="text-primary">под контролем</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональные услуги для малого и среднего бизнеса
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Ведете малый или средний бизнес и хотите сосредоточиться на его росте, не отвлекаясь на сложности бухгалтерии? 
            Мы предлагаем полный спектр бухгалтерских услуг, которые обеспечат порядок в ваших финансах и соблюдение всех требований законодательства.
          </p>
          <div className="flex items-center justify-center mb-12">
            <div className="bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
              <div className="flex items-center space-x-2 text-primary font-medium">
                <Icon name="MapPin" size={20} />
                <span>Оказываем услуги по всей России</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Доверьте рутину профессионалам
            </h2>
            <p className="text-xl text-muted-foreground">
              Получите уверенность в каждом финансовом решении
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full">
                    <Icon name="Calculator" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ведение учета</h3>
                <p className="text-muted-foreground">
                  Полноценное ведение бухгалтерского и налогового учета с использованием современных программ
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full">
                    <Icon name="FileText" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Отчетность</h3>
                <p className="text-muted-foreground">
                  Своевременная подготовка и сдача всех видов отчетности в налоговые органы и фонды
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full">
                    <Icon name="TrendingUp" size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Консультации</h3>
                <p className="text-muted-foreground">
                  Профессиональные консультации по налогообложению и оптимизации бизнес-процессов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-muted-foreground">
              Почему предприниматели выбирают нас
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-primary/10 rounded-full">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Полный контроль финансов</h3>
              <p className="text-muted-foreground text-sm">
                Прозрачная отчетность и полный контроль над финансовыми операциями
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-primary/10 rounded-full">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Своевременная сдача отчетности</h3>
              <p className="text-muted-foreground text-sm">
                Никогда не пропустим сроки подачи отчетов и уплаты налогов
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-primary/10 rounded-full">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-muted-foreground text-sm">
                Учитываем специфику вашего бизнеса и предлагаем оптимальные решения
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="inline-flex p-3 bg-primary/10 rounded-full">
                  <Icon name="AlertTriangle" size={24} className="text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Без ошибок и штрафов</h3>
              <p className="text-muted-foreground text-sm">
                Профессиональный подход исключает ошибки и связанные с ними штрафы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Categories & Tax Regimes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Аутсорсинг по категориям бизнеса
            </h2>
            <p className="text-xl text-muted-foreground">
              Работаем со всеми формами ведения бизнеса и налоговыми режимами
            </p>
          </div>

          {/* Business Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Icon name="Store" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Торговля</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Розничная и оптовая торговля, интернет-магазины, маркетплейсы
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Учет товарных операций</li>
                  <li>• Работа с НДС</li>
                  <li>• Складской учет</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Услуги</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Консалтинг, IT, образование, ремонт, красота, здоровье
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Учет доходов от услуг</li>
                  <li>• Работа с договорами</li>
                  <li>• Кадровый учет</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Icon name="Factory" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Производство</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Малое производство, пищевая промышленность, рукоделие
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Учет материалов</li>
                  <li>• Калькуляция себестоимости</li>
                  <li>• Производственная отчетность</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Логистика</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Грузоперевозки, курьерские услуги, складские операции
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Путевые листы</li>
                  <li>• ГСМ и амортизация</li>
                  <li>• Транспортная отчетность</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Icon name="Utensils" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Общепит</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Кафе, рестораны, доставка еды, кейтеринг
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Работа с кассами</li>
                  <li>• Учет продуктов</li>
                  <li>• Алкогольная отчетность</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Icon name="Code" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">IT и Digital</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Разработка, дизайн, маркетинг, блогинг, онлайн-курсы
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Валютное законодательство</li>
                  <li>• Роялти и авторские права</li>
                  <li>• IT льготы</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tax Regimes */}
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Работаем со всеми налоговыми режимами
              </h3>
              <p className="text-lg text-muted-foreground">
                Профессиональное ведение учета для любой формы ведения бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Icon name="User" size={20} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-lg">ИП</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Индивидуальное предпринимательство
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Книга доходов и расходов</li>
                  <li>• Налоговые декларации</li>
                  <li>• Страховые взносы</li>
                  <li>• Работа с сотрудниками</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <Icon name="Building" size={20} className="text-green-600" />
                  </div>
                  <h4 className="font-semibold text-lg">ООО</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Общество с ограниченной ответственностью
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Полный бухгалтерский учет</li>
                  <li>• Баланс и отчеты</li>
                  <li>• Налог на прибыль</li>
                  <li>• Дивиденды участникам</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <Icon name="Zap" size={20} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-lg">УСН</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Упрощенная система налогообложения
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• УСН "Доходы" 6%</li>
                  <li>• УСН "Доходы минус расходы" 15%</li>
                  <li>• Льготные ставки по регионам</li>
                  <li>• Кассовый метод учета</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg mr-3">
                    <Icon name="Smartphone" size={20} className="text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-lg">НПД</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Налог на профессиональный доход
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Работа через приложение</li>
                  <li>• 4% с физлиц, 6% с юрлиц</li>
                  <li>• Без отчетности</li>
                  <li>• Переход на другие режимы</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-100 rounded-lg mr-3">
                    <Icon name="FileText" size={20} className="text-red-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Патент</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Патентная система налогообложения
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Фиксированная стоимость</li>
                  <li>• По видам деятельности</li>
                  <li>• Сроком от 1 до 12 месяцев</li>
                  <li>• Книга доходов</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-teal-100 rounded-lg mr-3">
                    <Icon name="Calculator" size={20} className="text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-lg">ОСНО</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Общая система налогообложения
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• НДС 20%</li>
                  <li>• Налог на прибыль 20%</li>
                  <li>• НДФЛ 13%</li>
                  <li>• Полная отчетность</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg mr-3">
                    <Icon name="Tractor" size={20} className="text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-lg">ЕСХН</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Единый сельскохозяйственный налог
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• 6% с разности доходов и расходов</li>
                  <li>• НДС 10%/20%</li>
                  <li>• Для сельхозпроизводителей</li>
                  <li>• Льготы и субсидии</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                    <Icon name="Users" size={20} className="text-indigo-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Смешанные</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Комбинированные режимы
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• УСН + Патент</li>
                  <li>• ОСНО + УСН по видам</li>
                  <li>• НПД + ИП статус</li>
                  <li>• Переходные периоды</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Получите бесплатную консультацию уже сегодня!
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму и мы свяжемся с вами в течение часа
              </p>
            </div>
            
            <Card className="border border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение (необязательно)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем бизнесе и интересующих услугах..." 
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Icon name="Calculator" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">БухПро</h3>
                  <p className="text-slate-400 text-sm">Профессиональная бухгалтерия</p>
                </div>
              </div>
              <p className="text-slate-400">
                Мы помогаем малому и среднему бизнесу сосредоточиться на росте, взяв на себя все заботы о бухгалтерии.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <a href="tel:+79224505970" className="text-slate-300 hover:text-white transition-colors">
                    +7 922 450-59-70
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <a href="mailto:ajseutemisova2@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                    ajseutemisova2@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Ведение бухгалтерского учета</li>
                <li>Налоговая отчетность</li>
                <li>Консультации по налогообложению</li>
                <li>Поддержка предпринимателей</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 БухПро. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}