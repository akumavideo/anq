import * as React from 'react';
import FormItem from 'antd/lib/form/FormItem';
import TextArea from 'antd/lib/input/TextArea';

import 'antd/dist/antd.css';
import 'antd/lib/input/style/index.css';

export interface Props {
  label: string;
  text: string;
}

export const FreeFormat: React.SFC<Props> = (props) => {
  const { label, text } = props;

  return (
    <FormItem label={label} >
      <TextArea
        rows={5}
        cols={1}
        defaultValue={text}
        placeholder={'自由入力欄'}
      />
    </FormItem>
  );
};