import React from 'react';
import styles from './App.module.css';
import FuForm from './FuForm';
import FuResultsModal from './FuResultsModal';

function App() {
  const [fu, setFu] = React.useState<number>(0);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const resetFormRef = React.useRef<() => unknown | null>()

  const formHandler = (calculatedFu: number, resetHandler: () => unknown) => {
    resetFormRef.current = resetHandler;
    setFu(calculatedFu);
    setIsModalOpen(true);
  }

  const closeHandler = (clearForm: boolean) => {
    setIsModalOpen(false);
    if (clearForm) {
      resetFormRef.current?.();
    }
  }

  return (
    <div className={styles.app}>
      <FuForm submitFu={formHandler} />
      <div className={[styles.resultModalContainer, !isModalOpen && styles.resultModalContainerHidden].join(' ')}>
        {isModalOpen && <FuResultsModal fu={fu} closeHandler={closeHandler} />}
      </div>
    </div>
  );
}

export default App;
