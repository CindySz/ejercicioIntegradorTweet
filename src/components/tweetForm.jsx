import { useContext } from "react"
import { useMutation, useQueryClient } from "react-query"
import { createTweet } from "../api/api"
import { TweetContext } from "./context/ContextTweet"


export const TweetForm = () => {


    const{state, dispatch}=useContext(TweetContext);

    const queryClient = useQueryClient()
    const { mutate, isLoading, isSuccess, data, reset } = useMutation(createTweet, {
        onSuccess: (tweet) => {
            queryClient.setQueriesData('tweets', prevPost => prevPost.concat(tweet))
            queryClient.invalidateQueries('tweets')
        }
    })
    

    const handleSubmit = (event) => {
        event.preventDefault()
        mutate({
            name: state.name.name,
            text: state.text.text
        }, {
            onSuccess: ()=> {
                event.target.elements.name.value = ""
                event.target.elements.text.value = ""
            }
        })
    }

    const onBlur = (e) => {

        e.preventDefault();

        const type= e.target.name=== "name"?"NOMBRE_TWEET":"TEXTO_TWEET";


        dispatch({type:type, payload:{[e.target.name]: e.target.value} })
    }
    

    return (
        <>
       
            <form className="formCont" onSubmit={handleSubmit}>
                <input name="name" placeholder="Nombre" onBlur={onBlur} />
                <textarea name="text" placeholder="Tweet" onBlur={onBlur}  maxLength={120} />
                <button type="submit">{isLoading ? "Cargando..." : "Tweetear"}</button>
            </form>
            {
                isSuccess && <div>
                    {/* <p>El tweet de {data.name} se cargo correctamente, con el id {data.id}</p> */}
                    <p>El tweet de {state.name.name} se cargo correctamente, con el id {data.id}</p>
                    <button onClick={reset}>OK</button>
                </div>
            }
        </>
    )
}