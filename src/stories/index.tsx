import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FreeFormat from '../components/answer-form/FreeFormat';
import RadioSelect from '../components/answer-form/RadioSelect';

const impressions = '今回の社員旅行の感想をお聞かせください';
const handling = 'NP会幹事の対応はいかがでしたか？';
const dummyText =
`とてもおもしろかったです！
滝登りが特に印象に残っています。
寒かったですがよい経験になりました...。`;

storiesOf('Free format', module)
.add('Empty', () => (
  <FreeFormat label={impressions} text={''} />
))
.add('Not empty', () => (
  <FreeFormat label={impressions} text={dummyText} />
))
;

storiesOf('Radio select', module)
  .add('Not selected', () => (
    <RadioSelect label={handling} />
  ))
  .add('Selected', () => (
    <RadioSelect label={handling} value={'5'} />
  ))
;