import Grid from '@mui/material/Grid';
import { NoteChartBox } from '../styled';
const NoteChart = (props: any) => {
  return (
    <NoteChartBox.Box>
      <Grid container spacing={2}>
        {props.data.map((item: any, index: any) => {
          return (
            <Grid key={index} style={{ textAlign: 'center' }} xs={4}>
              <NoteChartBox.Title>{item.name}</NoteChartBox.Title>
              <NoteChartBox.Content>
                {item.data.reduce(
                  (totalCalories: any, count: any) => totalCalories + count.y,
                  0
                )}
                <span>Users</span>
              </NoteChartBox.Content>
              <NoteChartBox.Color theme={item.color} />
            </Grid>
          );
        })}
      </Grid>
    </NoteChartBox.Box>
  );
};
export default NoteChart;
