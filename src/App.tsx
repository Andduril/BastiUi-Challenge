import { useState } from 'react';
import styles from './App.module.scss';
import SmileyList from './components/SmileyList/SmileyList';

function App() {
  const [state, setState] = useState<number | null>(null);

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <SmileyList onSmileySelect={(state: number) => setState(state)}/>
        {state && (<h1>{state}/5</h1>)}
      </div>
    </div>
  )
}

export default App
