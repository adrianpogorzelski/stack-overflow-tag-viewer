import Header  from '../components/Header';
import { fn } from '@storybook/test';
import '../output.css'

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Render = {};
