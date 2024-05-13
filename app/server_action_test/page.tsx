import {sayHello} from "../lib/action"

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={sayHello}> 
      <button>Say Hello</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage

