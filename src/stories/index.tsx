import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { FreeFormat } from '../components/answer-form/FreeFormat';

const label = '今回の社員旅行の感想をお聞かせください';
const dummyText =
`とてもおもしろかったです！
滝登りが特に印象に残っています。
寒かったですがよい経験になりました...。`;

storiesOf('Free format survey', module)
.add('Empty', () => (
  <FreeFormat label={label} text={''} />
))
.add('Not empty', () => (
  <FreeFormat label={label} text={dummyText} />
))
;