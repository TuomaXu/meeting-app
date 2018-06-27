import  {
    registerURL,
    unRegisterURL,
    checkURL,
    chaxuTongjiURL,
    yiqiandaoURL,
    weiqiandaoURL,
    checkPersonURL
} from './URLConfig';

class MeetingManager {

    async register(name,tel){
        try {
            const person = {
                name,
                tel
            }

            const res = await fetch(registerURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(person)
            })

            const result = await res.json();

            return result;
        } catch (error){
            return {
                success:false,
                errorCode:10001,
                errorMessage:`${error}`
            }
        }
    }

    async unRegister(rid){

         try {
            const params = {
                rid
            }

            const res = await fetch(unRegisterURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(params)
            })

            const result = await res.json();

            return result;

        } catch (error) {
            return {
                success:false,
                errorCode:10001,
                errorMessage:`${error}`
            }
        }
    }

    async check(rid){
         try {
            const person = {
                rid
            }

            const res = await fetch(checkURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(person)
            })

            const result = await res.json();
            return result;

        } catch (error) {
            return {
                success:false,
                errorCode:10001,
                errorMessage:`${error}`
            }
        }
    }

    async chaxuTongji(){
        try {
            const res = await fetch(chaxuTongjiURL)
            const result = await res.json();
           return result;

       } catch (error) {
           return {
               success:false,
               errorCode:10001,
               errorMessage:`${error}`
           }
       }
       
   }

    async yiqiandao (){
        try {
            const res = await fetch(yiqiandaoURL)
            const result = await res.json();
            return result;

        } catch (error) {
            return {
                success:false,
                errorCode:10001,
                errorMessage:`${error}`
            }
        }
    }

    async weiqiandao (){
        try {
            const res = await fetch(weiqiandaoURL)
            const result = await res.json();
            return result;

        } catch (error) {
            return {
                success:false,
                errorCode:10001,
                errorMessage:`${error}`
            }
        }
    }

    async checkPerson(rid){
        try {
            const person = {
                rid:this.state.rid
            }

            const res = await fetch(checkPersonURL,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(person)
            })

            const result = await res.json();

            return result;

        } catch (error) {
            return {
                success:false,
                errorCode:10001,
                errorMessage:`${error}`
            }
        }
    }
}

export default new MeetingManager();