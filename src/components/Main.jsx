import React, {useEffect, useState} from 'react'
import './../App.css'
import Button from './Button';
import Counter from './Counter';
import Advice from './Advice';
import {Link} from 'react-router-dom';


export default function Main() {
	const [counter, setCounter] = useState(0);
	const [advice, setAdvice] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(()=>{
		generateAdvice();
	},[])

	async function generateAdvice(){
		setIsLoading(true)
		const data = await fetch('https://api.adviceslip.com/advice');
		const advice = await data.json();
		setAdvice(advice.slip.advice);
		setCounter((prev)=>prev+1);
		setIsLoading(false);
	}

	function reset(){
		setAdvice('No advice');
		setCounter(0);
	}

  return (
	<div className='container'>
		<Advice isLoading={isLoading} advice={advice}/>
		<Counter value={counter}/>
		<Button
			handlerFunction={generateAdvice}
			text="Click to generate"
			/>
		<Button handlerFunction={reset} text="Reset advice" />
		<Link to="/products">Go To Products</Link>
	</div>
  )
}
