import * as React from 'react';
import 'typeface-roboto';
import TextField from 'material-ui/TextField';
import {
  withStyles,
  WithStyles,
  Theme,
} from 'material-ui/styles';

type ComponentClassNames = 'root';

export interface FreeFormatProps {
  label: string;
  text: string;
}

const styles = (theme: Theme) => ({
  root: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
  },
});

const FreeFormat: React.SFC<FreeFormatProps & WithStyles<ComponentClassNames>> = ({classes, label, text}) => {

  return (
    <form>
      <TextField
        id="multiline-static"
        label={label}
        multiline={true}
        rows="10"
        className={classes.root}
        defaultValue={text}
        margin="normal"
      />
    </form>
  );
};

export default withStyles(styles)(FreeFormat);