import React from 'react';
import { Todo } from '../../../typings';

type PageProps = {
	params: {
		todoId: string
	}
}

const fetchTodo = async (todoId: string) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)

	const todo = await res.json()
	return todo
}

const page = async ({ params: { todoId } }: PageProps) => {
	const todo: Todo = await fetchTodo(todoId)

	const bgColorClass = todo.completed ? 'bg-green-200' : 'bg-yellow-200';

	return (
		<div className={`p-12 border-2 m-2 shadow-xl ${bgColorClass}`}>
			<p>
				#{todo.id}: {todo.title}
			</p>
			<p>
				completed: {todo.completed ? "Yes" : "No"}
			</p>
			<p className='border-t border-black mt-5 text-right'>
				By user: {todo.userId}
			</p>
		</div>
	);
};

export default page;