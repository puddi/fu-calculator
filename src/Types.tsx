export enum MeldTypes {
  SEQUENCE = 1,
  TRIPLET = 2,
  QUAD = 3
}

export enum WaitTypes {
  SEQUENCE_TWO_SIDED = 1,
  SEQUENCE_ONE_SIDED = 2,
  SEQUENCE_GAP = 3,
  PAIR = 4,
  TRIPLET = 5,
}

export interface Meld {
  type: MeldTypes;
  isOpen: boolean;
  isSimple: boolean;
}
