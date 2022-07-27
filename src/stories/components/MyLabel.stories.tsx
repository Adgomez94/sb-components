import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyLabel from "../../components/MyLabel";


export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  // Para poner en unselect las acciones
  argTypes: {
    // pouenes poner los objectos de options
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// crear una historia
export const Basic = Template.bind({})
// Poner valores por defecto story book
Basic.args = {
  label: 'Hola mundo',
  size: 'normal',
  allcaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args = {
  size: 'normal',
  allcaps: true
}
export const Secondary = Template.bind({})
Secondary.args = {
  size: 'normal',
  color: 'secondary',
}
export const Tertiary = Template.bind({})
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
}
export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac',
}
export const CustomBackground = Template.bind({})
CustomBackground.args = {
  size: 'h1',
  fontColor: '#ffffff',
  backgroundColor: '#000000'
}
