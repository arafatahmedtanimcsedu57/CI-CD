import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../css/style.css';
// import '../css/icons.css';

function loadStories() {
  // require('../stories/General/');
  // require('../stories/Navigation/');
  // require('../stories/Data Entry/');
  // require('../stories/Data Display/');
  // require('../stories/Feedback/');
  // require('../stories/Other/');


  require('../stories/IM Data Display');
  require('../stories/IM Feedback');
  // You can require as many stories as you need.
}

addDecorator(withInfo);
configure(loadStories, module);