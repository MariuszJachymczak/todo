import axios from "axios"

export async function getTodos() {
    const result = await axios.get('https://gorest.co.in/public/v2/users/101/todos',
    {
        headers: {
          Authorization:
            "Bearer 5a7bbe0927d53e30520d01dca1e8762ff52122744b4d101a3e41f927ce81ca79",
        },
      }
    )
    return result
}

export async function addTodo(newTodo) {
    const result = await axios.post(
      `https://gorest.co.in/public/v2/users/101/todos`,
      newTodo,
      {
        headers: {
          Authorization:
            "Bearer 5a7bbe0927d53e30520d01dca1e8762ff52122744b4d101a3e41f927ce81ca79",
        },
      }
    );
    return result;
  }