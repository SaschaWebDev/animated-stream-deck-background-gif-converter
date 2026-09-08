export interface Preset {
  label: string;
  model: string;
  cols: number;
  rows: number;
  tileWidth: number;
  tileHeight: number;
  gap: number;
  /** Virtual device whose grid the user defines (e.g. Stream Deck Mobile, 1-8 x 1-8). */
  variableGrid?: boolean;
}

export const PRESETS: Preset[] = [
  {
    label: 'Stream Deck MK.2',
    model: '20GBA9901',
    cols: 5,
    rows: 3,
    tileWidth: 72,
    tileHeight: 72,
    gap: 16,
  },
  {
    label: 'Stream Deck XL',
    model: '20GAT9902',
    cols: 8,
    rows: 4,
    tileWidth: 144,
    tileHeight: 144,
    gap: 40,
  },
  {
    label: 'Stream Deck Mini',
    model: '20GAI9902',
    cols: 3,
    rows: 2,
    tileWidth: 72,
    tileHeight: 72,
    gap: 16,
  },
  {
    label: 'Stream Deck +',
    model: '20GBD9901',
    cols: 4,
    rows: 2,
    tileWidth: 72,
    tileHeight: 72,
    gap: 16,
  },
  {
    label: 'Stream Deck Neo',
    model: '20GBJ9901',
    cols: 4,
    rows: 2,
    tileWidth: 72,
    tileHeight: 72,
    gap: 16,
  },
  {
    label: 'Stream Deck + XL',
    model: '20GBX9901',
    cols: 9,
    rows: 4,
    tileWidth: 144,
    tileHeight: 144,
    gap: 40,
  },
  {
    // Virtual device rendered on phone/tablet screens — no physical bezel (gap 0),
    // no documented profile model string. cols/rows are the max-capability fallback;
    // the user must enter their actual grid (1-8 x 1-8) before processing.
    label: 'Stream Deck Mobile',
    model: '',
    cols: 8,
    rows: 8,
    tileWidth: 144,
    tileHeight: 144,
    gap: 0,
    variableGrid: true,
  },
];
