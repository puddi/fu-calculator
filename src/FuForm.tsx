import React from 'react';
import styles from './FuForm.module.css';
import {MeldTypes, WaitTypes, Meld} from './Types'
import calculateFu from './calculateFu';

const DEFAULT_MELD = {
  type: MeldTypes.SEQUENCE,
  isOpen: false,
  isSimple: true,
}

const SEQUENCE_WAITS = [WaitTypes.SEQUENCE_TWO_SIDED, WaitTypes.SEQUENCE_ONE_SIDED, WaitTypes.SEQUENCE_GAP];

const isValidMeld = (meld: Meld) => {
  return meld.type !== DEFAULT_MELD.type || meld.isOpen !== DEFAULT_MELD.isOpen || meld.isSimple !== DEFAULT_MELD.isSimple;
}


type MeldPickerProps = {
  meld: Meld;
  setMeld: (meld: Meld) => unknown;
  title: string;
}

const MeldPicker = ({meld, setMeld, title}: MeldPickerProps) => {
  const createAndSetMeld = (type: MeldTypes, isSimple: boolean, isOpen: boolean) => {
    setMeld({
      type,
      isSimple,
      isOpen
    });
  }

  const createTypeProps = (type: MeldTypes) => {
    return {
      className: meld.type === type ? styles.activeButton : '',
      onClick: () => createAndSetMeld(type, meld.isSimple, meld.isOpen)
    }
  }

  return (
    <>
      <p className={styles.meldTitle}>{title}</p>
      <div className={styles.meldTypes}>
        <div {...createTypeProps(MeldTypes.SEQUENCE)}>Sequence</div>
        <div {...createTypeProps(MeldTypes.TRIPLET)}>Triplet</div>
        <div {...createTypeProps(MeldTypes.QUAD)}>Quad</div>
      </div>
      <div className={styles.meldOptions}>
        <div className={styles.spacer}></div>
        <div className={styles.meldOpenOption} onClick={() => createAndSetMeld(meld.type, meld.isSimple, !meld.isOpen)}>
          <span className={[styles.meldOptionText, meld.isOpen && styles.meldOptionTextActive].join(' ')}>Open</span>
          <span className={[styles.meldOptionText, !meld.isOpen && styles.meldOptionTextActive].join(' ')}>Closed</span>
        </div>
        <div
          className={[styles.meldSimpleOption, meld.type == MeldTypes.SEQUENCE && styles.meldSimpleOptionHidden].join(' ')}
          onClick={() => createAndSetMeld(meld.type, !meld.isSimple, meld.isOpen)}
        >
          <span className={[styles.meldOptionText, meld.isSimple && styles.meldOptionTextActive].join(' ')}>Simple</span>
          <span className={[styles.meldOptionText, !meld.isSimple && styles.meldOptionTextActive].join(' ')}>H / T</span>
        </div>
      </div>
    </>
  )
}

type WaitPickerProps = {
  wait: WaitTypes | null,
  setWait: (wait: WaitTypes) => unknown,
  allSequences: boolean,
  noSequences: boolean,
}

const WaitPicker = ({wait, setWait, allSequences, noSequences}: WaitPickerProps) => {

  const createProps = (type: WaitTypes) => {
    const shouldBeDisabled = (
      (SEQUENCE_WAITS.includes(type) && noSequences) ||
      (type === WaitTypes.TRIPLET && allSequences)
    );

    return {
      className: [
        wait === type ? styles.activeButton : '',
        shouldBeDisabled ? styles.disabled : '',
      ].join(' '),
      onClick: () => {
        if (shouldBeDisabled) {
          return;
        }
        setWait(type)
      }
    }
  }

  return (
    <div className={styles.waitOptions}>
      <div {...createProps(WaitTypes.SEQUENCE_TWO_SIDED, )}>Two-sided Sequence Wait</div>
      <div {...createProps(WaitTypes.SEQUENCE_ONE_SIDED)}>One-sided Sequence Wait</div>
      <div {...createProps(WaitTypes.SEQUENCE_GAP)}>Gap Sequence Wait</div>
      <div {...createProps(WaitTypes.PAIR)}>Pair Wait</div>
      <div {...createProps(WaitTypes.TRIPLET)}>Triplet Wait</div>
    </div>
  )
}

type FuFormProps = {
  submitFu: (fu: number, resetHandler: () => unknown) => unknown;
}

const FuForm = ({submitFu}: FuFormProps) => {
  const [wonByChiitoi, setWonByChiitoi] = React.useState<boolean | null>(null);
  const [meld1, setMeld1] = React.useState<Meld>({...DEFAULT_MELD});
  const [meld2, setMeld2] = React.useState<Meld>({...DEFAULT_MELD});
  const [meld3, setMeld3] = React.useState<Meld>({...DEFAULT_MELD});
  const [meld4, setMeld4] = React.useState<Meld>({...DEFAULT_MELD});
  const [wait, setWait] = React.useState<WaitTypes | null>(null);
  const [wonWithTsumo, setWonWithTsumo] = React.useState<boolean>(false);
  const [wonWithClosedRon, setWonWithClosedRon] = React.useState<boolean>(false);
  const [wonWithYakuhaiPair, setWonWithYakuhaiPair] = React.useState<boolean>(false);
  const [wonWithDoubleYakuhaiPair, setWonWithDoubleYakuhaiPair] = React.useState<boolean>(false);

  const isReady = (wonByChiitoi != null && (wonByChiitoi === false ? wait != null : true));

  const melds = [meld1, meld2, meld3, meld4];
  const allSequences = melds.every(meld => meld.type === MeldTypes.SEQUENCE);
  const noSequences = melds.every(meld => meld.type !== MeldTypes.SEQUENCE);
  const handCouldBeClosed = melds.filter(meld => meld.isOpen).length <= 1;

  const resetForm = () => {
    setWonByChiitoi(null);
    setMeld1({...DEFAULT_MELD})
    setMeld2({...DEFAULT_MELD})
    setMeld3({...DEFAULT_MELD})
    setMeld4({...DEFAULT_MELD})
    setWait(null);
    setWonWithTsumo(false);
    setWonWithClosedRon(false);
    setWonWithYakuhaiPair(false);
    setWonWithDoubleYakuhaiPair(false);
  }

  const submitHandler = () => {
    if (!isReady) {
      return;
    }

    const fu = calculateFu({
      wonByChiitoi,
      melds: [meld1, meld2, meld3, meld4],
      wait: wait,
      misc: {
        wonWithTsumo,
        wonWithClosedRon,
        wonWithYakuhaiPair,
        wonWithDoubleYakuhaiPair
      },
    });

    submitFu(fu, resetForm);
  }

  // update waits and misc if melds make them impossible.
  React.useEffect(() => {
    if (wait != null) {
      if (noSequences && SEQUENCE_WAITS.includes(wait)) {
        setWait(null);
      } else if (allSequences && wait === WaitTypes.TRIPLET) {
        setWait(null);
      }
    }

    if (!handCouldBeClosed && wonWithClosedRon) {
      setWonWithClosedRon(false);
    }
  }, [meld1, meld2, meld3, meld4])

  const renderMainForm = () => {
    const melds = [meld1, meld2, meld3, meld4];

    return (
      <>
        <p>What were your melds?</p>
        <p className={styles.subnote}>Remember - completing a meld via Ron means it's open!</p>
        <MeldPicker meld={meld1} setMeld={setMeld1} title={'First Meld'} />
        <MeldPicker meld={meld2} setMeld={setMeld2} title={'Second Meld'} />
        <MeldPicker meld={meld3} setMeld={setMeld3} title={'Third Meld'} />
        <MeldPicker meld={meld4} setMeld={setMeld4} title={'Fourth Meld'} />
        <hr></hr>
        <p>What was your wait?</p>
        <WaitPicker wait={wait} setWait={setWait} allSequences={allSequences} noSequences={noSequences} />
        <hr></hr>
        <p>Misc. - Pick all that apply</p>
        <div className={styles.miscOptions}>
          <div
            onClick={() => {
              setWonWithTsumo(!wonWithTsumo);
              if (wonWithClosedRon) {
                setWonWithClosedRon(false);
              }
            }
          }>
            <div className={[styles.miscCheckbox, wonWithTsumo && styles.miscCheckboxChecked].join(' ')}></div>
            <span>Won via Tsumo</span>
          </div>
          <div
            className={!handCouldBeClosed ? styles.disabled : ''}
            onClick={() => {
              if (!handCouldBeClosed) {
                return;
              }

              setWonWithClosedRon(!wonWithClosedRon);
              if (wonWithTsumo) {
                setWonWithTsumo(false);
              }
            }}
          >
            <div className={[styles.miscCheckbox, wonWithClosedRon && styles.miscCheckboxChecked].join(' ')}></div>
            <span>Won via Ron with a Closed Hand</span>
          </div>
          <div onClick={() => {
            if (wonWithYakuhaiPair) {
              setWonWithDoubleYakuhaiPair(false);
            }
            setWonWithYakuhaiPair(!wonWithYakuhaiPair);
          }}>
            <div className={[styles.miscCheckbox, wonWithYakuhaiPair && styles.miscCheckboxChecked].join(' ')}></div>
            <span>Yakuhai Pair</span>
          </div>
          <div
            className={!wonWithYakuhaiPair ? styles.disabled : ''}
            onClick={() => {
              if (!wonWithYakuhaiPair) {
                return;
              }
              setWonWithDoubleYakuhaiPair(!wonWithDoubleYakuhaiPair)
            }}
          >
            <div className={[styles.miscCheckbox, wonWithDoubleYakuhaiPair && styles.miscCheckboxChecked].join(' ')}></div>
            <span>Yakuhai Pair is both Round and Seat Wind</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <p>Did you win by Chiitoi?</p>
      <div className={styles.chiitoiButtonsContainer}>
        <div
          className={[styles.chiitoiButton, wonByChiitoi === true && styles.activeButton].join(' ')}
          onClick={() => setWonByChiitoi(wonByChiitoi === true ? null : true)}>
          Yes
        </div>
        <div
          className={[styles.chiitoiButton, wonByChiitoi === false && styles.activeButton].join(' ')}
          onClick={() => setWonByChiitoi(wonByChiitoi === false ? null : false)}>
          No
        </div>
      </div>
      {wonByChiitoi === false && <>
        <hr></hr>
        {renderMainForm()}
      </>}
      <div className={styles.spacer}></div>
      <div className={styles.floatingContainer}>
        <div
          className={[styles.floatingBox, !isReady && styles.floatingBoxHide].join(' ')}
          onClick={() => submitHandler()}
        >
          Calculate
        </div>
      </div>
    </div>
  )
}

export default FuForm;