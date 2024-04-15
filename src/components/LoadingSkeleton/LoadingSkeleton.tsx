import { Skeleton, Stack } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Stack spacing={2}>
      {Array.from({ length: 10 }, () => (
        <Skeleton variant="rectangular" width={650} height={50} />
      ))}
    </Stack>
  );
};

export default LoadingSkeleton;
