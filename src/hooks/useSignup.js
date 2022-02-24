import {useEffect, useState} from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = ()=>{
    const [isCancelled , setIsCancelled] = useState(false)
    const [error  , setError] = useState(null)
    const [isPending , setIspending] = useState(false)
    const {dispatch} = useAuthContext()
    
    const signup = async (email , password , username)=>{
      setError(null)
      setIspending(true)

      try {
        const res = await projectAuth.createUserWithEmailAndPassword(email , password)
        console.log(res.user);
        if(!res){
           throw new Error('Could not complete signup')
        }

        await res.user.updateProfile({displayName : username})
       
        dispatch({type : 'LOGIN' , payload : res.user })
         
        if(!isCancelled){
          setIspending(false)
          setError(null)
        }

      } catch (err) {
          
          if(!isCancelled){
            console.log(err.message);
            setIspending(false)
            setError(null)
          }
      }
    }

    useEffect(()=>{
      return ()=> setIsCancelled(true)
    } , [])

    return {error , isPending , signup}
}


