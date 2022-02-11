import Tabs from '../components/Tabs';

export default {
    title: 'Tabs',
    component: Tabs
};

const Template = (args) => ({
    components: { Tabs },
    setup: () => ({ args }),
    template: '<tabs v-bind="args" />',
});

export const Example = Template.bind({});
Example.args = {
    options: ['首页', '个人']
};
