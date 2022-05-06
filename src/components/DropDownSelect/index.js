import React, { useState } from 'react'
import './styles.css'

export const DropDownSelect = ({ options }) => {

	const [list, setList] = useState(false)
	const [selOption, setOption] = useState(options[0])

	const handleClick = () => {
		setList(!list)
	}

	const renderedlist = options.map((option) => {
		return (
			<li onClick={() => { setOption(option); setList(!list) }} key={option.value} className={selOption.value === option.value ? 'active' : ''}>{option.label}</li>
		)
	})

	return (
		<>
			<input className='drop-down' type='text' onClick={(e) => handleClick()} placeholder='Select an item' />
			<ul className='drop-down_options' style={{ display: list ? 'block' : 'none' }}>
				{renderedlist}
			</ul>
		</>
	)
}