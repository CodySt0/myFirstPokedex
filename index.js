async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
  } catch (error) {
    console.log(error);
  }
}

getUsers();
