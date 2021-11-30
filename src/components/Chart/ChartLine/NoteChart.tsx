import Grid from '@mui/material/Grid';
import { NoteChartBox } from '../styled';
const NoteChart = (props: any) => {
  return (
    <NoteChartBox.Box>
      <Grid container spacing={2}>
        {props.data.map((item: any, index: any) => {
          return (
            <Grid key={index} style={{ textAlign: 'center' }} xs={4}>
              <NoteChartBox.Title>New Users</NoteChartBox.Title>
              <NoteChartBox.Content>
                {item.data.reduce(
                  (totalCalories: any, meal: any) => totalCalories + meal.y,
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
