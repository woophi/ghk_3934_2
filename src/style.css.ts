import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '2rem 1rem 1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
  position: 'relative',
  marginTop: '1rem',
});

const rowSB = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const rowImg = style({
  textAlign: 'center',
});
const rowBtns = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

const detail = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  backgroundColor: '#F3F4F5',
  borderRadius: '1rem',
  width: '100%',
});
const detailRow = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  variants: {
    opened: {
      true: {
        marginBottom: '1rem',
      },
    },
  },
});

export const bsContent = style({
  padding: 0,
});

const banner = style({
  position: 'absolute',
  padding: '12px',
  borderRadius: '8px',
  backgroundColor: '#EBC6AD',
  zIndex: 1,
  right: '8px',
  top: '-12%',
  maxWidth: '93px',
  fontSize: '14px',
  fontWeight: 600,
  width: '93px',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  rowSB,
  rowImg,
  rowBtns,
  detail,
  detailRow,
  bsContent,
  banner,
};
