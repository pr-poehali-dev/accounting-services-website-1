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
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ваша бухгалтерия<br />
            <span className="text-primary">под контролем</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональные услуги для малого и среднего бизнеса
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
            Ведете малый или средний бизнес и хотите сосредоточиться на его росте, не отвлекаясь на сложности бухгалтерии? 
            Мы предлагаем полный спектр бухгалтерских услуг, которые обеспечат порядок в ваших финансах и соблюдение всех требований законодательства.
          </p>
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