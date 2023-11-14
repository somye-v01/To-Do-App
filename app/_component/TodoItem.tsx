import { FC, useState } from 'react';
import { Todo } from '../page';

interface TodoItemProps extends Todo {
	DeleteFunction: (i: number) => void;
	UpdateTitleFunction: (i: number, NewTitle: string) => void;
	UpdateDescriptionFunction: (i: number, NewDescription: string) => void;
	index: number;
}

const TodoItem: FC<TodoItemProps> = ({
	title,
	desc,
	DeleteFunction,
	index,
	UpdateDescriptionFunction,
	UpdateTitleFunction,
}) => {
	const [isInputEditable, setisInputEditable] = useState(false);
	const [currentTitle, setcurrentTitle] = useState(title);

	const [isDescEditable, setisDescEditable] = useState(false);
	const [currentDesc, setcurrentDesc] = useState(desc);

	return (
		<div className="flex items-center justify-between px-5 font-light mb-5 text-lg">
			<div className="flex justify-between w-3/5">
				{isInputEditable ? (
					<input
						defaultValue={title}
						onChange={(e) => setcurrentTitle(e.target.value)}
					/>
				) : (
					<h5>{title}</h5>
				)}
				{isDescEditable ? (
					<input
						defaultValue={desc}
						onChange={(e) => setcurrentDesc(e.target.value)}
					/>
				) : (
					<h5>{desc}</h5>
				)}
			</div>
			<button
				className=" bg-red-400 text-white px-4 py-2 rounded font-bold"
				onClick={() => {
					DeleteFunction(index);
				}}
			>
				Delete
			</button>
			<button
				className=" bg-slate-400 text-white px-3 py-2 rounded font-bold mx-5"
				onClick={() => {
					if (isInputEditable) {
						UpdateTitleFunction(index, currentTitle);
						setisInputEditable(false);
					} else {
						setisInputEditable(true);
					}
				}}
			>
				{isInputEditable ? <>Done</> : <>Edit Task</>}
			</button>
			<button
				className=" bg-slate-400 text-white px-3 py-2 rounded font-bold"
				onClick={() => {
					if (isDescEditable) {
						UpdateDescriptionFunction(index, currentDesc);
						setisDescEditable(false);
					} else {
						setisDescEditable(true);
					}
				}}
			>
				{isDescEditable ? <>Done</> : <>Edit Description</>}
			</button>
		</div>
	);
};

export default TodoItem;
