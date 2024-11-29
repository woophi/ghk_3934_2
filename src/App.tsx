import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { List } from '@alfalab/core-components/list';
import { Typography } from '@alfalab/core-components/typography';
import { ReactNode, useState } from 'react';
import { AIBox } from './AIBox';
import robotHb from './assets/robot_hb.jpg';
import { MoreInfo } from './MoreInfo';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
// ₽

const boxes: {
  title: string;
  price: string;
  bsText: ReactNode;
}[] = [
  {
    price: 'Бесплатно',
    title: 'Создать бота самостоятельно',
    bsText: (
      <>
        <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="semibold">
          Какие есть роботы
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Торговые роботы могут различаться по своему функционалу, стратегии и типу анализа. Вот некоторые примеры торговых
          роботов, которые используются на финансовых рынках:
        </Typography.Text>
        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Реинвестор
        </Typography.TitleResponsive>
        <List tag="ul" marker="•">
          <List.Item>Тип: Автоматический</List.Item>
          <List.Item>Описание: Помогает реинвестировать дивиденды и купоны в выбранный актив</List.Item>
        </List>
        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Исследователь
        </Typography.TitleResponsive>
        <List tag="ul" marker="•">
          <List.Item>Тип: Полуавтоматический</List.Item>
          <List.Item>
            Описание: Отслеживает новости, анализируют графики, финансовую отчётность по компании и дает прогноз, что будет
            дальше с выбранным активом.
          </List.Item>
        </List>
        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Спекулянт
        </Typography.TitleResponsive>
        <List tag="ul" marker="•">
          <List.Item>Тип: Автоматический</List.Item>
          <List.Item>Описание: Покупает актив при падении, продает актив при росте внутри торгового дня</List.Item>
        </List>
        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Инвестор
        </Typography.TitleResponsive>
        <List tag="ul" marker="•">
          <List.Item>Тип: Автоматический</List.Item>
          <List.Item>Описание: Позволяет регулярно докупать для усреднения балансовой цены</List.Item>
        </List>
      </>
    ),
  },
  {
    price: 'Бесплатно',
    title: 'Выбрать готового ИИ-бота',
    bsText: (
      <>
        <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="semibold">
          Какие есть опции при создании ИИ-роботов
        </Typography.TitleResponsive>
        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Для автоматизированных
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Выбрать регулярность сделок, актив, логику работы, объемы.
          <br />
          Настройка производится с консультацией экспертов.
        </Typography.Text>
        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Для полуавтоматизированных
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Выбрать источник информации для анализа, периодичность получения информации, каналы для получения информации
        </Typography.Text>
        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Что нужно для создания
        </Typography.TitleResponsive>
        <List tag="ul">
          <List.Item>Оформить предзаказ</List.Item>
          <List.Item>Получить консультацию у специалиста</List.Item>
        </List>
      </>
    ),
  },
  {
    price: 'Бесплатно',
    title: 'Загрузить внешнего бота',
    bsText: (
      <>
        <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="semibold">
          Что нужно, чтобы загрузить внешнего бота?
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">Для загрузки внешнего бота необходимо</Typography.Text>
        <List tag="ul">
          <List.Item>Оформить предзаказ</List.Item>
          <List.Item>Получить консультацию у специалиста</List.Item>
        </List>
      </>
    ),
  },
  {
    price: 'Бесплатно',
    title: 'Заказать разработку индивидуального бота',
    bsText: (
      <>
        <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="semibold">
          Что нужно, чтобы заказать разработку индивидуального бота?
        </Typography.TitleResponsive>
        <List tag="ul">
          <List.Item>Оформить предзаказ</List.Item>
          <List.Item>Получить консультацию у специалиста</List.Item>
        </List>

        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Каких ИИ-ботов можно создать?
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium">
          Возможен широкий набор опций для создания ИИ-роботов.
          <br />
          Для подробностей необходимо оформить предзаказ и проконсультироваться со специалистом.
        </Typography.Text>

        <Typography.TitleResponsive tag="h4" view="small" font="system" weight="semibold">
          Какая стоимость создания робота?
        </Typography.TitleResponsive>
        <List tag="ul">
          <List.Item>Стоимость формируется по запросу</List.Item>
          <List.Item>Стоимость зависит от времени на разработку робота</List.Item>
        </List>
      </>
    ),
  },
];

export const App = () => {
  const [thxShow, setThx] = useState(false);

  const createPreOrder = () => {
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <img src={robotHb} width="100%" height={280} style={{ objectFit: 'cover' }} />
      <div className={appSt.container}>
        <Typography.TitleResponsive tag="h1" view="small" font="system" weight="semibold">
          Торговые роботы на базе ИИ для инвестирования
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium">
          Торговые роботы - уникальный инструмент, который поможет вам:
        </Typography.Text>
        <List tag="ul">
          <List.Item>получать пассивный доход</List.Item>
          <List.Item>усреднять позиции</List.Item>
          <List.Item>спекулятивно зарабатывать</List.Item>
          <List.Item>получать сжатую сводку по аналитике и новостям по активам с прогнозами, что будет дальше.</List.Item>
        </List>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Что доступно клиентам Альфа-Инвестиций
        </Typography.TitleResponsive>

        {boxes.map(b => (
          <AIBox key={b.title} {...b} moreInfoClick={console.debug} preOrderClick={createPreOrder} />
        ))}

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h2" view="small" font="system" weight="semibold">
          Часто задаваемые вопросы
        </Typography.TitleResponsive>

        <MoreInfo
          title="Что это?"
          text={
            <>
              Торговые роботы - это инструмент инвестора, который самостоятельно отслеживает ситуацию на рынке и на основе
              ранее заданных параметров принимает решение о покупке или продаже акций и других активов, либо подаёт владельцу
              соответствующий сигнал. Роботы делятся на 2 типа:
              <List tag="ul" marker="•">
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Автоматические - совершают сделки самостоятельно по заранее определенной стратегии.
                  </Typography.Text>
                </List.Item>
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Полуавтоматические - отслеживают новости, анализируют графики, финансовую отчётность компаний и дает
                    прогноз, что будет дальше с активом. Данный тип роботов настраивается самостоятельно.
                  </Typography.Text>
                </List.Item>
              </List>
            </>
          }
        />
        <MoreInfo
          title="Зачем нужны торговые роботы?"
          text={
            <>
              Торговые боты в инвестициях нужны для автоматизации процессов торговли на бирже. Они самостоятельно отслеживают
              ситуацию на рынке и на основе заранее заданных параметров либо принимают решение о покупке или продаже акций и
              других активов, либо транслируют свой прогноз владельцу робота.
            </>
          }
        />
        <MoreInfo
          title="Кому подойдет?"
          text={
            <>
              <List tag="ol">
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Инвесторам с опытом, которые хотят диверсифицировать свой портфель или настроить автоматическое
                    управление активами
                  </Typography.Text>
                </List.Item>
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Инвесторам без опыта роботы помогают в изучении рынка, тестировании стратегий
                  </Typography.Text>
                </List.Item>
              </List>
            </>
          }
        />
        <MoreInfo
          title="Какие преимущества?"
          text={
            <>
              <List tag="ul" marker="•">
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Отсутствие эмоций. Торгуя самостоятельно, можно поддаться соблазну или панике, провести сделку на
                    невыгодных условиях и потерять деньги. ИИ-бот действует по заданному алгоритму и не принимает
                    необдуманных решений.
                  </Typography.Text>
                </List.Item>
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Экономия времени. Подключение торгового робота к своему счету позволяет существенно сократить время на
                    изучение и анализ подходящего момента для сделки.
                  </Typography.Text>
                </List.Item>
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Высокая скорость обработки информации. Программа непрерывно изучает и анализирует все данные, которые
                    могут повлиять на цену акций. Таким образом, робот может мгновенно отреагировать на изменения конъюнктуры
                    рынка и выставить заявку в соответствии с выбранной стратегией.
                  </Typography.Text>
                </List.Item>
              </List>
            </>
          }
        />
        <MoreInfo
          title="Как это работает?"
          text={
            <>
              <Typography.Text view="primary-medium" color="secondary" weight="bold">
                Подключение
              </Typography.Text>
              <List tag="ul" marker="•">
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Необходимо открыть брокерский счет
                  </Typography.Text>
                </List.Item>
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Оформить предзаказ на готового робота / создание индивидуального / подключение имеющегося к своему
                    брокерскому счету
                  </Typography.Text>
                </List.Item>
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    После создания робота, необходимо пополнить брокерский счет
                  </Typography.Text>
                </List.Item>
              </List>
              <Typography.Text view="primary-medium" color="secondary" weight="bold">
                Управление
              </Typography.Text>
              <List tag="ul" marker="•">
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Для автоматических роботов: в мобильном приложении у вас будет раздел, в котором вы сможете отслеживать
                    успешность торговли торговли робота, корректировать настройки, а также управлять уведомлениями.
                  </Typography.Text>
                </List.Item>
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Для полуавтоматических роботов: в мобильном приложении Альфа-Инвестиции будет раздел, где вы сможете
                    следить за лентой прогнозов вашего робота, корректировать его настройки и управлять уведомлениями.
                  </Typography.Text>
                </List.Item>
              </List>
              <Typography.Text view="primary-medium" color="secondary" weight="bold">
                Отключение
              </Typography.Text>
              <List tag="ul" marker="•">
                <List.Item>
                  <Typography.Text view="primary-medium" color="secondary">
                    Чтобы отключить ранее подключенного робота необходимо зайти в раздел "профиль" в приложении
                    Альфа-Инвестиции или в Альфа Инвестии Онлайн → В поле "Торговый робот" нажать кнопку "Отключить". После
                    отключение вы сможете заново включить робота в течение 30 дней. По истечению 30 дней, для подключения
                    робота нужно будет покупать заново.
                  </Typography.Text>
                </List.Item>
              </List>
            </>
          }
        />
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" onClick={createPreOrder}>
          Оформить предзаказ
        </ButtonMobile>
      </div>
    </>
  );
};
