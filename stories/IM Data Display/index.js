import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';
import Chart from './Chart';


storiesOf('IM Card', module)
    .add('Card', () => <Card />)
    .add('Chart', () => <Chart />);