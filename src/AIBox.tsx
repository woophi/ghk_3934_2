import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Typography } from '@alfalab/core-components/typography';
import { ReactNode, useState } from 'react';
import robotBs from './assets/robot_bs.jpg';
import { appSt } from './style.css';

type Props = {
  title: string;
  price: string;
  moreInfoClick: () => void;
  preOrderClick: () => void;
  bsText: ReactNode;
};

export const AIBox = ({ moreInfoClick, preOrderClick, price, title, bsText }: Props) => {
  const [bsOpened, setOpenBS] = useState(false);

  const closeBs = () => {
    setOpenBS(false);
  };

  return (
    <>
      <div className={appSt.box}>
        <div className={appSt.rowImg}>
          <Typography.TitleResponsive tag="h3" view="medium" font="system" weight="regular">
            {title}
          </Typography.TitleResponsive>
        </div>

        <div className={appSt.rowBtns}>
          <ButtonMobile
            onClick={() => {
              moreInfoClick();
              setOpenBS(true);
            }}
            style={{ padding: '0 .5rem' }}
            size="xs"
            block
            view="filled"
          >
            Узнать больше
          </ButtonMobile>
          <ButtonMobile onClick={preOrderClick} style={{ padding: '0 .5rem' }} size="xs" block view="primary">
            Оформить предзаказ
          </ButtonMobile>
        </div>

        <div className={appSt.banner}>{price}</div>
      </div>

      <BottomSheet
        open={bsOpened}
        onClose={closeBs}
        stickyHeader
        hasCloser
        contentClassName={appSt.bsContent}
        actionButton={
          <div className={appSt.rowBtns}>
            <ButtonMobile
              onClick={() => {
                setOpenBS(false);
              }}
              style={{ padding: '0 .5rem' }}
              size="xs"
              block
              view="filled"
            >
              Назад
            </ButtonMobile>
            <ButtonMobile onClick={preOrderClick} style={{ padding: '0 .5rem' }} size="xs" block view="primary">
              Заказать
            </ButtonMobile>
          </div>
        }
      >
        <img src={robotBs} width="100%" height={280} style={{ objectFit: 'cover' }} />
        <div className={appSt.container}>{bsText}</div>
      </BottomSheet>
    </>
  );
};
