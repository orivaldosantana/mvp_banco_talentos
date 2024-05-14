import {addTest} from "../lib/action"

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addTest}> 
      <input type="text" name="name" placeholder="Your name" />
      <button>Create</button>
      </form>
    </div>
  )
}

export default ServerActionTestPage

