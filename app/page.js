'use client';
import React, { useState } from 'react';

const page = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [taskList, setTaskList] = useState([]);

	const buttonhandle = (e) => {
		e.preventDefault();
		setTaskList([...taskList, { title, desc }]);
		setDesc('');
		setTitle('');
	};

	const deleteTask = (i) => {
		let copyTask = [...taskList];
		copyTask.splice(i, 1);
		setTaskList(copyTask);
	};

	let renderTask = <h2> No Task available </h2>;
	if (taskList.length > 0) {
		renderTask = taskList.map((t, i) => {
			return (
				<div
					key={i}
					className="flex items-center justify-between px-5 font-light mb-5 text-lg"
				>
					<div className="flex justify-between w-2/3">
						<h5>{t.title}</h5>
						<h5>{t.desc}</h5>
					</div>
					<button
						className=" bg-red-400 text-white px-4 py-2 rounded font-bold"
						onClick={() => {
							deleteTask(i);
						}}
					>
						Delete
					</button>
				</div>
			);
		});
	}

	return (
		<div>
			<h1 className="bg-black text-white text-2xl font-semibold text-center">
				To-Do List
			</h1>
			<form onSubmit={buttonhandle}>
				<input
					type="text"
					className="2xl border-zinc-800 border-2 m-5 py-2 px-2 rounded-md outline-none"
					placeholder="Enter task here"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<input
					type="text"
					className="2xl border-zinc-800 border-2 m-5 py-2 px-2 rounded-md outline-none"
					placeholder="Enter description here"
					value={desc}
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				/>
				<button className=" m-4 bg-black text-white py-2 px-4 rounded-sm">
					Add
				</button>
			</form>
			<hr />
			<div className="p-8 bg-slate-200">
				<ul>{renderTask}</ul>
			</div>
		</div>
	);
};

export default page;
