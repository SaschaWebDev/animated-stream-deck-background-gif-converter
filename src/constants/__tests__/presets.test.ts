import { PRESETS } from '../presets';

describe('PRESETS', () => {
  it('has exactly 7 presets', () => {
    expect(PRESETS).toHaveLength(7);
  });

  it('all presets have required fields with positive values', () => {
    for (const preset of PRESETS) {
      expect(preset.label).toBeTruthy();
      expect(preset.cols).toBeGreaterThan(0);
      expect(preset.rows).toBeGreaterThan(0);
      expect(preset.tileWidth).toBeGreaterThan(0);
      expect(preset.tileHeight).toBeGreaterThan(0);
      // Variable-grid devices are virtual: no profile model string, no bezel gap
      if (!preset.variableGrid) {
        expect(preset.model).toBeTruthy();
        expect(preset.gap).toBeGreaterThan(0);
      }
    }
  });

  it('has no duplicate model IDs', () => {
    const models = PRESETS.map((p) => p.model).filter(Boolean);
    expect(new Set(models).size).toBe(models.length);
  });

  it('MK.2 is 5x3', () => {
    const mk2 = PRESETS.find((p) => p.label.includes('MK.2'));
    expect(mk2).toBeDefined();
    expect(mk2!.cols).toBe(5);
    expect(mk2!.rows).toBe(3);
  });

  it('XL is 8x4', () => {
    const xl = PRESETS.find((p) => p.label === 'Stream Deck XL');
    expect(xl).toBeDefined();
    expect(xl!.cols).toBe(8);
    expect(xl!.rows).toBe(4);
  });

  it('+ XL is 9x4', () => {
    const plusXl = PRESETS.find((p) => p.label === 'Stream Deck + XL');
    expect(plusXl).toBeDefined();
    expect(plusXl!.cols).toBe(9);
    expect(plusXl!.rows).toBe(4);
  });

  it('Mobile is a variable-grid device with 144px tiles and no gap', () => {
    const mobile = PRESETS.find((p) => p.label === 'Stream Deck Mobile');
    expect(mobile).toBeDefined();
    expect(mobile!.variableGrid).toBe(true);
    expect(mobile!.cols).toBe(8);
    expect(mobile!.rows).toBe(8);
    expect(mobile!.tileWidth).toBe(144);
    expect(mobile!.tileHeight).toBe(144);
    expect(mobile!.gap).toBe(0);
  });

  it('only Mobile is variable-grid', () => {
    const variable = PRESETS.filter((p) => p.variableGrid);
    expect(variable).toHaveLength(1);
    expect(variable[0].label).toBe('Stream Deck Mobile');
  });
});
