import React from 'react'
import {Badge, Card,CardBody,CardHeader} from 'reactstrap'
const ToDo = (props) => {

    const handleClick = () => {
        props.toggleCompleted(props.task.id);
    }
    return (
        <div onClick={handleClick} className={`item${props.task.completed?" completed" :""}`}>
            <div>
                <Card color="primary" style={{width:'25%'}}>
                    <CardBody>
                        <Badge>{props.task.id}</Badge>
                        <CardHeader style={{fontWeight:'bold'}}>{props.task.task}</CardHeader>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ToDo;
