import { useContext } from "react";
import { Context } from "../../App";


const Secondchild = ()=>{

    const {counter, setcounter} = useContext(Context);

    return(

        <div style={{backgroundColor: "red"}}>

            <h4>{counter}</h4>
        </div>

    )

}

export default Secondchild;