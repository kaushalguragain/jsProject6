const Item=(props)=>(
    <div>
           <h3> <p>name:{props.name}</p>
            <p>address:{props.address}</p>
            <p>contact:{props.contact}</p>
            <p>age:{props.age}</p>
            </h3>
    </div>
);
class App extends React.Component{
    
    friends=[
        { name:"Kaushal Guragain",address:"kalopul",    contact:"9843XXXXXX", age:21},
        { name:"Prabin Mainali"  ,address:"Sundarijal", contact:"94123xxxxx", age:20},
        { name:"Suman Saapkota"  ,address:"bhaktapur",  contact:"9845xxxxxx", age:24}
        
    ];
    render(){
        return(
            <div>
           
           {this.friends.map(
                    friend=><Item
                     name={friend.name}
                     address={friend.address}
                     contact={friend.contact}
                     age={friend.age}/>
                    )}
                
                <p><h1>Prop has been set up:  {this.props.message}</h1></p>

                <h2>list of friends</h2>
                
                

    
            </div>
        );

    }
   
}
ReactDOM.render(<App message="Prop is initialized"/>,document.getElementById("app"));