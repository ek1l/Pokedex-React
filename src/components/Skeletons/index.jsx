import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function Skeletons() {
  return (
        <Container maxWidth="xxl">
        
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom:"1em"}} />
        </Container>

  );
}
