import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';

export default function Skeletons() {
  return (
        <Container maxWidth="xxl" display="flex" flexDirection="column" gap="30px">
        
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        <Skeleton variant="rounded" width="100%" height={100} />
        </Container>

  );
}
