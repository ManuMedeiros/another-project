import React from 'react';
import { Meta } from '@storybook/react';
import Logo from '.';

const meta: Meta = {
    title: 'logo',
    component: Logo,
}

export default meta;

export const Default = () => <Logo/>;

