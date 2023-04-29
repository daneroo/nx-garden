import styles from './shared-next.module.css';

/* eslint-disable-next-line */
export interface SharedNextProps {}

export function SharedNext(props: SharedNextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedNext!</h1>
    </div>
  );
}

export default SharedNext;
