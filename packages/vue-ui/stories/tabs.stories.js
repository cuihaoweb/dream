import Tabs from '../components/Tabs';
import TabPane from '../components/Tab-Pane';

export default {
    title: 'Tabs',
    component: Tabs
};

const Template = (args) => ({
    components: { Tabs, TabPane },
    setup: () => ({ args }),
    template: `<tabs v-bind="args">
        <tab-pane name="h">hello</tab-pane>
        <tab-pane name="b">hello</tab-pane>
    </tabs>`,
});

export const Example = Template.bind({});
Example.args = {
    modelValue: 'h'
};
