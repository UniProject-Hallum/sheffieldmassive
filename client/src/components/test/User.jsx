import { Component } from "react";

class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('/api')
        .then(res => res.json())
        .then(users=> {
            this.setState({ users : users});
        });
    }

    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.users.map(user => (
                            <li>username {user.fullName}</li>
                        ))
                    }
                </ul>
            </div>
        )
        
    }
}

export default Users