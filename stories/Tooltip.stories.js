import {fn} from '@storybook/test';
import {Tooltip} from '../src';
import DarkInfo from "./assets/dark-info.svg"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/Tooltip',
    component: Tooltip,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
    },
};

export const CustomIcon = {
    args: {
        icon: DarkInfo
    },
};

export const CustomText = {
    args: {
        tooltip: "This is a custom tooltip text"
    },
};

export const CustomSize = {
    args: {
        width: "200px",
        height: "100px"
    },
};
