import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
	const test = () => {
		let formData = new FormData();
		fetch("/cms/weixin/sendSMS/checkhw_store_sms_key/send", {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/x-www-form-urlencoded"
			}),
		})
	}
	return (
		<div className="App">
			<button onClick={test}>点击测试跨域</button>
		</div>
	);
}

export default App;
