import React from 'react';
import styles from './FuResultsModal.module.css';


const getScoringString = (fu: number, han: number, isDealer: boolean) => {
  if (fu >= 70 && han === 3) {
    return 'Mangan';
  } else if (fu >= 40 && han === 4) {
    return 'Mangan';
  }

  const roundUp = (num: number) => {
    return Math.ceil(num / 100) * 100;
  }

  const basicPoints = (fu * 2**(2 + han));

  if (isDealer) {
    return `${roundUp(basicPoints * 6)} (${roundUp(basicPoints * 2)})`
  } else {
    return `${roundUp(basicPoints * 4)} (${roundUp(basicPoints)}/${roundUp(basicPoints * 2)})`;
  }

}

type FuResultsModalProps = {
  fu: number;
  closeHandler: (clearForm: boolean) => unknown
}

function FuResultsModal({fu, closeHandler}: FuResultsModalProps) {
  const roundedUpFu = (fu === 25 ? 25 : Math.ceil(fu / 10) * 10)

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <div className={styles.content}>
      <p className={styles.fuHeader}>{fu} → {roundedUpFu} Fu</p>
      <hr />
      <div className={styles.scoringTable}>
        <div className="col">
          <p> </p>
          <p>1 Han</p>
          <p>2 Han</p>
          <p>3 Han</p>
          <p>4 Han</p>
        </div>
        <div className="col">
          <p>Dealer:</p>
          <p>{getScoringString(roundedUpFu, 1, true)}</p>
          <p>{getScoringString(roundedUpFu, 2, true)}</p>
          <p>{getScoringString(roundedUpFu, 3, true)}</p>
          <p>{getScoringString(roundedUpFu, 4, true)}</p>
        </div>
        <div className="col">
          <p>Non-Dealer:</p>
          <p>{getScoringString(roundedUpFu, 1, false)}</p>
          <p>{getScoringString(roundedUpFu, 2, false)}</p>
          <p>{getScoringString(roundedUpFu, 3, false)}</p>
          <p>{getScoringString(roundedUpFu, 4, false)}</p>
        </div>
      </div>
      <hr />
      <div className={styles.options}>
        <div className={styles.closeOption} onClick={() => closeHandler(false)}>Close</div>
        <div className={styles.closeAndResetOption} onClick={() => closeHandler(true)}>Close + Reset</div>
      </div>
    </div>
  );
}

export default FuResultsModal;
