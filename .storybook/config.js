import {addDecorator} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import '!style-loader!css-loader!sass-loader!./../src/css/styles.scss';

addDecorator(StoryRouter());
