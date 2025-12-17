PROPS:--------

Props are input to a component.
component(waterr bottle) are reusable,so it becomes powerful when you
can give it different data(water) every time.

// Every component will have two states:
1.Props(component:bottle-size,color,design)
2.states(water full or half inside the bottle)

NOTE: Props can't be changed,states can be changed

Interms of water level - 
    1.initial state,
    2.updated state,
    3.current state
    
Data can be passed from one component to another component.
1.props flow downward parent to child
2.props are read only(child cannot modify)
3.props make components dynamic and reusable

State will be implemented using react hook called useState(0).
Usestate is a function which returns an array with two arguments
const [count,setcount]=useState(0)