import { SelectDropDown } from './components/SelectDropDown/index.js'

const options = [
	{
		id: 1,
		label: 'green',
		value: 'green'
	},
	{
		id: 2,
		label: 'blue',
		value: 'blue'
	},
	{
		id: 3,
		label: 'cyan',
		value: 'cyan'
	}
]

function App() {
	return (
		<div className="App">
			<SelectDropDown options={options} />
		</div>
	)
}

export default App
