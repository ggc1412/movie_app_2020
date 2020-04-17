import React from "react";

class App extends React.Component{
    state = {
        isLoading: true,
        Movie: []
    };

    Loading = () => {
        this.setState({
            isLoading: false
        })
    };
    
    componentDidMount = () =>{
        setInterval(this.Loading,5000)
    }
    // render에 이 setInterval 메서드를 넣게 되면 re-render되면서 setInterval 메서드가 다시 실행된다.
    // componentDidMount에 메서드를 넣으면 reder와는 상관 없기 때문에 ( re-render는 업데이트임 ) 한번만 실행된다.   

    render(){
        const { isLoading } = this.state;
        
        return (
            <div>
                <h1>{isLoading ? "Loading..." : "We're ready!" }</h1>
            </div>
        );
    }
}

export default App;