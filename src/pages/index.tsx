import * as React from 'react';
import withRoot from '../components/withRoot';
import { WithStyles } from 'material-ui';
import withStyles from 'material-ui/styles/withStyles';
import FreeFormat from '../components/FreeFormat';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    textAlign: 'center',
    paper: {
      paddingTop: 16,
      paddingBottom: 16,
      width: 200,
      // marginTop: theme.spacing.unit * 3,
    }
  },
};
type ClassNames = keyof typeof styles;

class Index extends React.Component<WithStyles<ClassNames>, any> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography type={'display2'} gutterBottom>
          2017年度社員旅行アンケート
        </Typography>
          <FreeFormat label={'今年の社員旅行の感想をお聞かせください'} text={''} />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(Index));
