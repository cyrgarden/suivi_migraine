import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux'

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          color:'primary',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic(props) {
  const bad_days = useSelector(state => state.BadDaysReducer);
  console.log(bad_days);

  const [progress, setProgress] = React.useState(10);
  console.log(progress);

  React.useEffect(() => {
    setProgress(props.value,800);

  })

  return <CircularProgressWithLabel value={progress} />;
}
