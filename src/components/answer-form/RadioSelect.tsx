import * as React from 'react';
import 'typeface-roboto';
import {
  withStyles,
  Theme,
} from 'material-ui/styles';
import RadioGroup from 'material-ui/Radio/RadioGroup';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio from 'material-ui/Radio/Radio';
import { StyledComponentProps } from 'material-ui';

type State = {
  value: string,
};

export interface MultipleChoiceProps {
  label: string;
  value?: string;
}

const styles = (theme: Theme) => ({
  root: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

@withStyles(styles)
class RadioSelect extends React.Component<MultipleChoiceProps & StyledComponentProps<'root'>, State> {
  state: State = {
    value: this.props.value ? this.props.value : '',
  };

  handleChange = (event: React.ChangeEvent<{}>, value: string) => {
    this.setState({value: value});
  };

  render() {
    const {handleChange} = this;
    const label = this.props.label;
    const classes = this.props.classes;
    const value = this.state.value;

    return (
      <form>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
          className={classes!.root}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value={'5'} control={<Radio/>} label={'とてもよかった'}/>
          <FormControlLabel value={'4'} control={<Radio/>} label={'よかった'}/>
          <FormControlLabel value={'3'} control={<Radio/>} label={'どちらでもない'}/>
          <FormControlLabel value={'2'} control={<Radio/>} label={'悪かった'}/>
          <FormControlLabel value={'1'} control={<Radio/>} label={'とても悪かった'}/>

          {/*<FormControlLabel value={'5'} control={<Radio/>} label={<FormattedMessage id="survey.multiple-choice.value.very-good" />}/>*/}
          {/*<FormControlLabel value={'4'} control={<Radio/>} label={<FormattedMessage id="survey.multiple-choice.value.good" />}/>*/}
          {/*<FormControlLabel value={'3'} control={<Radio/>} label={<FormattedMessage id="survey.multiple-choice.value.average" />}/>*/}
          {/*<FormControlLabel value={'2'} control={<Radio/>} label={<FormattedMessage id="survey.multiple-choice.value.bad" />}/>*/}
          {/*<FormControlLabel value={'1'} control={<Radio/>} label={<FormattedMessage id="survey.multiple-choice.value.very-bad" />}/>*/}
        </RadioGroup>
      </form>
    );
  }
}

export default RadioSelect;