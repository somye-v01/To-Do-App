'use client';
import React, { useState } from 'react';
import TodoItem from './_component/TodoItem';
export interface Todo {
	title: string;
	desc: string;
}

const page = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [taskList, setTaskList] = useState<Todo[]>([]);

	const buttonhandle = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTaskList([...taskList, { title, desc }]);
		setDesc('');
		setTitle('');
	};

	const deleteTask = (i: number) => {
		let copyTask = [...taskList];
		copyTask.splice(i, 1);
		setTaskList(copyTask);
	};

	const UpdateTitle = (i: number, NewTitle: string) => {
		const TodoList = [...taskList];
		TodoList[i].title = NewTitle;
		setTaskList(TodoList);
	};

	const UpdateDescription = (i: number, NewDescription: string) => {
		const TodoList = [...taskList];
		TodoList[i].desc = NewDescription;
		setTaskList(TodoList);
	};

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
				<ul>
					{taskList.length <= 0 ? (
						<h2> No Task available </h2>
					) : (
						taskList.map((t, i) => (
							<TodoItem
								key={i}
								index={i}
								title={t.title}
								desc={t.desc}
								DeleteFunction={deleteTask}
								UpdateTitleFunction={UpdateTitle}
								UpdateDescriptionFunction={UpdateDescription}
							/>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default page;
