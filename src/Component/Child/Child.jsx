import {useContext} from 'react';
import { Context} from '../../App';
import Secondchild from '../Secondchild/Secondchild';

const Child = () => {

    const {counter, setCounter} = useContext(Context);

    return(
        <div>
            <button onClick={()=> setCounter(counter+1)}>increase</button>
            <Secondchild/>
        </div>

    )
}

export default Child;