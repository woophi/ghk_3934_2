import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Collapse } from '@alfalab/core-components/collapse';
import { Typography } from '@alfalab/core-components/typography';
import { ReactNode, useState } from 'react';
import { appSt } from './style.css';

type Props = {
  title: string;
  text: ReactNode;
};

export const MoreInfo = ({ text, title }: Props) => {
  const [diffOpen, setDiffOpen] = useState(false);

  return (
    <div className={appSt.detail} onClick={() => setDiffOpen(!diffOpen)}>
      <div className={appSt.detailRow({ opened: diffOpen })}>
        <Typography.Text view="primary-medium">{title}</Typography.Text>
        <CDNIcon color="#C5C5C7" name="glyph_chevron-down_m" />
      </div>
      <Collapse expanded={diffOpen}>
        <Typography.Text view="primary-medium" color="secondary">
          {text}
        </Typography.Text>
      </Collapse>
    </div>
  );
};
