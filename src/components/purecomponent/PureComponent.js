import React from 'react';
class MyPureComponent extends React.PureComponent {
    constructor(props) {
       super(props);
       this.state = {
          taskList: [
             { title: 'excercise'},
             { title: 'cooking'},
             { title: 'Reacting'},
          ]
       };
    }
    componentDidMount() {
       setInterval(() => {
          this.setState((oldState) => {
             return { taskList: [...oldState.taskList] }
          });
       }, 1000);
    }
    render() {
       console.log('taskList render called');
       return (<div>
          {this.state.taskList.map((task, i) => {
             return (<Task
                key={i}
                title={task.title}
             />);
          })}
       </div>);
    }
 }


 class Task extends React.Component {
    render() {
       console.log('task added');
       return (<div>
          {this.props.title}
       </div>);
    }
 }
 export {MyPureComponent};