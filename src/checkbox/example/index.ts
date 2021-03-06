import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { WidgetProperties } from '@dojo/widget-core/interfaces';
import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { v, w } from '@dojo/widget-core/d';
import Checkbox, { Mode } from '../../checkbox/index';

export class App extends WidgetBase<WidgetProperties> {
	private _checkboxStates: { [key: string]: boolean } = {
		c1: true,
		c2: false,
		c3: false,
		c4: false,
		c5: true
	};

	onChange(value: string, checked: boolean) {
		this._checkboxStates[value] = checked;
		this.invalidate();
	}

	render() {
		const {
			c1 = true,
			c2 = false,
			c3 = false,
			c4 = false,
			c5 = true
		} = this._checkboxStates;

		return v('div', [
			v('h2', {
				innerHTML: 'Checkbox Examples'
			}),
			v('fieldset', [
				v('legend', {}, ['Checkbox Example']),
				v('div', { id: 'example-1' }, [
					w(Checkbox, {
						key: 'c1',
						checked: c1,
						label: 'Sample checkbox that starts checked',
						value: 'c1',
						onChange: this.onChange
					})
				]),

				v('div', { id: 'example-2' }, [
					w(Checkbox, {
						key: 'c2',
						checked: c2,
						label: 'Sample disabled checkbox',
						disabled: true,
						value: 'c2',
						onChange: this.onChange
					})
				]),

				v('div', { id: 'example-3' }, [
					w(Checkbox, {
						key: 'c3',
						checked: c3,
						label: 'Required checkbox',
						required: true,
						value: 'c3',
						onChange: this.onChange
					})
				]),

				v('div', { id: 'example-4' }, [
					w(Checkbox, {
						key: 'c4',
						checked: c4,
						label: 'Checkbox in "toggle" mode',
						mode: Mode.toggle,
						value: 'c4',
						onChange: this.onChange
					})
				]),

				v('div', { id: 'example-5' }, [
					w(Checkbox, {
						key: 'c5',
						checked: c5,
						label: 'Disabled toggle mode',
						onLabel: 'On',
						offLabel: 'Off',
						mode: Mode.toggle,
						disabled: true,
						value: 'c5',
						onChange: this.onChange
					})
				])
			])
		]);
	}
}

const Projector = ProjectorMixin(App);
const projector = new Projector();

projector.append();
