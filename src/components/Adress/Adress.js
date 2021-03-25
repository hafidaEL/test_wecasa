import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { setUserAdress } from '../../slices/user'
import Basket from '../Basket/Basket'


export default function Adress() {
    const [adress, setAdress] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
      dispatch(setUserAdress(adress))
      setAdress('');
    }

    return (       
       <>
        <input type="text" placeholder="Adress" value={adress} onChange={e => setAdress(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <Basket />
      </>
    )
}
