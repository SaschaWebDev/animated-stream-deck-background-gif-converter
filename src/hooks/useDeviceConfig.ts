import { useState, useMemo } from 'react';
import { PRESETS } from '../constants/presets';
import type { AppMode } from '../types';
import {
  calculateTargetWidth,
  calculateTargetHeight,
  calculateGap,
  calculatePreviewTileSize,
  calculateScaledGap,
} from '../utils/device';

export function useDeviceConfig(appMode: AppMode = 'splitter') {
  const [presetIndex, setPresetIndex] = useState(0);
  const [rawCutoffMode, setCutoffMode] = useState(true);
  const [customGridEnabled, setCustomGridEnabled] = useState(false);
  const [customCols, setCustomCols] = useState(1);
  const [customRows, setCustomRows] = useState(1);
  const [gridOffsetCol, setGridOffsetCol] = useState(0);
  const [gridOffsetRow, setGridOffsetRow] = useState(0);
  // Device grid for variable-grid presets (Stream Deck Mobile) — null until the user enters it
  const [deviceCols, setDeviceCols] = useState<number | null>(null);
  const [deviceRows, setDeviceRows] = useState<number | null>(null);

  const rawPreset = PRESETS[presetIndex];

  // Variable-grid devices have no physical bezel, so cutoff mode never applies
  const cutoffMode =
    appMode === 'screensaver' || rawPreset.variableGrid ? false : rawCutoffMode;

  // Processing is blocked for variable-grid presets until the user has entered their grid
  const gridReady =
    !rawPreset.variableGrid || (deviceCols != null && deviceRows != null);

  const basePreset = useMemo(() => {
    if (!rawPreset.variableGrid) return rawPreset;
    return {
      ...rawPreset,
      cols: deviceCols ?? rawPreset.cols,
      rows: deviceRows ?? rawPreset.rows,
    };
  }, [rawPreset, deviceCols, deviceRows]);

  const preset = useMemo(() => {
    if (!customGridEnabled) return basePreset;
    return { ...basePreset, cols: customCols, rows: customRows };
  }, [customGridEnabled, basePreset, customCols, customRows]);

  const gap = calculateGap(preset, cutoffMode);
  const targetWidth = calculateTargetWidth(preset, cutoffMode);
  const targetHeight = calculateTargetHeight(preset, cutoffMode);
  const previewTileSize = calculatePreviewTileSize(preset);
  const scaledGap = calculateScaledGap(preset, cutoffMode);

  return {
    presetIndex,
    setPresetIndex,
    rawCutoffMode,
    cutoffMode,
    setCutoffMode,
    preset,
    basePreset,
    gap,
    targetWidth,
    targetHeight,
    previewTileSize,
    scaledGap,
    customGridEnabled,
    setCustomGridEnabled,
    customCols,
    setCustomCols,
    customRows,
    setCustomRows,
    gridOffsetCol,
    setGridOffsetCol,
    gridOffsetRow,
    setGridOffsetRow,
    deviceCols,
    setDeviceCols,
    deviceRows,
    setDeviceRows,
    gridReady,
  };
}
