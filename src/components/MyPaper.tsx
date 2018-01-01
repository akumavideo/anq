import * as React from 'react';
import { Theme, withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {
  WithStyles, TextField, FormControl, FormControlLabel, RadioGroup, FormLabel, FormGroup, FormHelperText
} from 'material-ui';
import Radio from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';

// const styles = (theme: Theme) => ({
//   root: theme.mixins.gutters({
//     paddingTop: 16,
//     paddingBottom: 16,
//     marginTop: theme.spacing.unit * 3,
//   }),
// });
// type ClassNames = keyof typeof styles;

const decorate = withStyles((theme: Theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1,
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  formControl: {
    marginBottom: theme.spacing.unit * 6,
  },
  group: {
    // margin: `${theme.spacing.unit}px 0`,
  },
}));

// const styles = (theme: Theme) => ({
//   root: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 500,
//     textField: {
//       marginLeft: theme.spacing.unit,
//       marginRight: theme.spacing.unit,
//       width: 200,
//     },
//   },
// });

export const PaperSheet = decorate<any>((props: any & WithStyles<'root'>) => (
  <div>
    <Paper className={props.classes.root} elevation={4}>
      <Typography type={'display1'} color={'primary'} gutterBottom>
        2017年度社員旅行アンケート
      </Typography>
      <Typography type="body1" component="p" gutterBottom>
        社員旅行へのご参加ありがとうございました！<br/>
        今後の参考にさせていただきたく、アンケートへのご協力をお願いいたします。
      </Typography>
      <form>
        <Grid
          container
          className={props.classes.root}
          direction={'column'}
        >
          <FormControl component="fieldset" className={props.classes.formControl}>
            <FormLabel component="legend">感想をお聞かせください</FormLabel>
            <TextField
              label="回答を入力"
              multiline
              rowsMax="4"
              // value={''}
              className={props.classes.textField}
              margin="normal"
            />
            <FormHelperText>複数行入力可</FormHelperText>
          </FormControl>
          <FormControl component="fieldset" required className={props.classes.formControl}>
            <FormLabel component="legend">今回のNP会の対応はいかがでしたか？</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender2"
              className={props.classes.group}
              // value={this.state.value}
              // onChange={this.handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="とても良かった" />
              <FormControlLabel value="female" control={<Radio />} label="良かった" />
              <FormControlLabel value="other" control={<Radio />} label="どちらでもない" />
              <FormControlLabel value="disabled" control={<Radio />} label="悪かった" />
              <FormControlLabel value="disabled" control={<Radio />} label="とても悪かった" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">どれか一つを選んでください</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={this.state.gilad}
                    // onChange={this.handleChange('gilad')}
                    value="千葉"
                  />
                }
                label="千葉"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={this.state.jason}
                    // onChange={this.handleChange('jason')}
                    value="滋賀"
                  />
                }
                label="滋賀"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={this.state.antoine}
                    // onChange={this.handleChange('antoine')}
                    value="佐賀"
                  />
                }
                label="佐賀"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </form>
    </Paper>
  </div>
));
