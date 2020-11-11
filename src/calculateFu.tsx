import {MeldTypes, WaitTypes, Meld} from './Types'

interface CalculateFuArgumentInterface {
  wonByChiitoi: boolean | null;
  melds: [Meld, Meld, Meld, Meld];
  wait: WaitTypes | null;
  misc: {
    wonWithTsumo: boolean;
    wonWithClosedRon: boolean;
    wonWithYakuhaiPair: boolean;
    wonWithDoubleYakuhaiPair: boolean;
  }
}

const calculateFu = ({
  wonByChiitoi,
  melds,
  wait,
  misc: {
    wonWithTsumo,
    wonWithClosedRon,
    wonWithYakuhaiPair,
    wonWithDoubleYakuhaiPair,
  }
}: CalculateFuArgumentInterface) => {
  if (wonByChiitoi) {
    return 25;
  }

  let fu = 20;
  melds.forEach(({type, isOpen, isSimple}) => {
    if (type === MeldTypes.QUAD) {
      if (isOpen) {
        fu += isSimple ? 8 : 16
      } else {
        fu += isSimple ? 16 : 32
      }
    } else if (type === MeldTypes.TRIPLET) {
      if (isOpen) {
        fu += isSimple ? 2 : 4
      } else {
        fu += isSimple ? 4 : 8
      }
    }
  });

  if (fu === 20 && !wonWithYakuhaiPair) {
    // this is pinfu!
    if (wonWithTsumo && melds.every(meld => !meld.isOpen)) {
      return 20;
    } else {
      // open pinfu
      return 30;
    }
  }

  if (wait !== WaitTypes.SEQUENCE_TWO_SIDED && wait !== WaitTypes.TRIPLET) {
    fu += 2;
  }

  if (wonWithTsumo) {
    fu += 2;
  }

  if (wonWithClosedRon) {
    fu += 10;
  }

  if (wonWithYakuhaiPair) {
    fu += 2;

    if (wonWithDoubleYakuhaiPair) {
      fu += 2;
    }
  }

  return fu;
}

export default calculateFu;