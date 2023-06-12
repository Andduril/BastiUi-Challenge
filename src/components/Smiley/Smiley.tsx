import styles from './Smiley.module.scss';

export interface SmileyProps {
  state: 'angry' | 'irritated' | 'neutral' | 'content' | 'happy';
  color: string;
  selected?: boolean;
  onClick?: () => void;
}

const Smiley: React.FC<SmileyProps> = ({ state, color, selected ,onClick }) => {
  return (
    <div onClick={onClick} className={styles.container} style={{ background: color, border: selected ? '8px solid white' : 'none' }}>
      <div className={styles.gradient}/>
      <div className={[styles.face, styles[`${state}_face`]].join(' ')}>
        {(state === 'angry') && (
          <div className={styles.eyebrows}>
            <span className={[styles.eyebrow, styles.left].join(' ')}/>
            <span className={[styles.eyebrow, styles.right].join(' ')}/>
          </div>
        )}
        <div className={styles.eyes}>
          <span className={styles.eye}/>
          <span className={styles.eye}/>
        </div>
        <span className={[styles.mouth ,styles[`${state}_mouth`]].join(' ')}/>
      </div>
    </div>
  )
}

export default Smiley
