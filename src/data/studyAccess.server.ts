// Enable only after authenticated progress has been validated for launch.
export const studyProgressionEnabled = () =>
  process.env['BOOKAR_ENFORCE_PROGRESSION'] === 'true';
