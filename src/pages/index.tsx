import * as React from 'react';
import withRoot from '../components/withRoot';
import { WithStyles } from 'material-ui';
import withStyles from 'material-ui/styles/withStyles';
// import FreeFormat from '../components/FreeFormat';
// import Typography from 'material-ui/Typography';
// import Paper from 'material-ui/Paper';
import { PaperSheet } from '../components/MyPaper';

const styles = {
  root: {
    // textAlign: 'center',
  },
};
type ClassNames = keyof typeof styles;

class Index extends React.Component<WithStyles<ClassNames>, any> {
  render() {
    return (
      <div className={this.props.classes.root}>
        {/*<Typography type={'display2'} gutterBottom>*/}
          {/*2017年度社員旅行アンケート*/}
        {/*</Typography>*/}
        {/*<Paper>*/}
          {/*<FreeFormat label={'今年の社員旅行の感想をお聞かせください'} text={''} />*/}
        {/*</Paper>*/}
        <PaperSheet/>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)<{}>(Index));
