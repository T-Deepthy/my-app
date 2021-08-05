import React, { useEffect, useState } from 'react';
import { createTodoComponent, deleteTodoComponent, editTodoComponent, getTodoComponents } from '../../actions/todo';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button, Input, List, Typography, PageHeader } from 'antd';
import uuid from 'react-uuid'

const ToDo = () => {
    return (
        <Row>
            <Col span={12}>
            <PageHeader title="React App To Learn Redux" />
            </Col>
            <Col span={24}>
                <ToDoCreate />
            </Col>
            <Col span={24}>
                <ToDoList />
            </Col>
        </Row>
    );
};

const ToDoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos);
    useEffect(() => {
        dispatch(getTodoComponents());
    }, [])
    const editTodo = (item) => {
        dispatch(editTodoComponent(item))
    }
    const deleteTodo = (item) => {
        dispatch(deleteTodoComponent(item))
    }
    return (
        <React.Fragment>
            <List
                header={<div>TODO LIST</div>}
                bordered
                dataSource={todoList.data}
                renderItem={item => (
                    <List.Item actions={[<Button onClick={() => editTodo(item)}>Edit</Button>,
                    <Button onClick={() => deleteTodo(item)}>Delete</Button>]}>
                        <Typography.Text mark>{item.title}</Typography.Text> {item.description}
                    </List.Item>
                )}
            />
        </React.Fragment>
    )
}


const ToDoCreate = () => {
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const resetValue = () => {
        setTodo('');
        setDescription('');
    }
    const createToDo = () => {
        dispatch(createTodoComponent({ id: uuid(), title: todo, description: description }));
        resetValue();
    }
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Input onChange={(e) => setTodo(e.target.value)} value={todo} />
                </Col>
                <Col span={14}>
                    <Input onChange={(e) => setDescription(e.target.value)} value={description}></Input>
                </Col>
                <Col span={4}>
                    <Button onClick={() => createToDo()}>Create</Button>
                </Col>
            </Row>
        </div>
    )
}
export default ToDo;