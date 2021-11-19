import { Grid, LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FileHeader } from './FileHeader';

export interface SingleFileUploadWithProgressProps {
  file: File;
  onDelete: (file: File) => void;
}

export function SingleFileUploadWithProgress({
  file,
  onDelete
}: SingleFileUploadWithProgressProps) {
  // const [progress, setProgress] = useState(0);

  return (
    <Grid item>
      <FileHeader file={file} onDelete={onDelete} />
      {/* <LinearProgress variant="determinate" value={progress} /> */}
    </Grid>
  );
}
