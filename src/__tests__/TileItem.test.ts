import { expect, it, describe } from "vitest";
import { mount } from '@vue/test-utils';
import TileItem from '../components/TileItem.vue'

describe('TileItem.vue', () => {
    it('should render element', () => {
        const wrapper = mount(TileItem, {
            props: {
                color: 'rgb(255,0,0)'
            }
        })

        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('.tile').exists()).toBe(true)
    })
})