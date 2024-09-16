/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña 
    ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar 
    un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar 
     un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    }
  ];
  
  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta más el café que el té",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    }
  ];

function buscarUsuario(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if ( usersDatabase[i].username === username && 
      usersDatabase[i].password === password) 
      {
      return true;
    }
  } return false;
  
}
function signIn(event) { 
  event.preventDefault();
  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  if (buscarUsuario(username, password)) { 
      alert(`Bienvenido a tu cuenta ${username}`); 
      mostrarTimeline(username);
  } else { 
      alert("Usuario o contraseña incorrectos!"); 
  } 
}

function mostrarTimeline(username) {
  const timelineDiv = document.getElementById("timeline");
  const timelineList = document.getElementById("timelineList");
  timelineList.innerHTML = "";

  usersTimeline.forEach(user => {
    /* if (user.username.toLowerCase() === username.toLowerCase()) {
      //busca un usuario especifico y devuelve su propio timeline
      const listItem = document.createElement("li");
      listItem.textContent = user.timeline;
      timelineList.appendChild(listItem);
    }*/
      // Muestra todos los timeline de las personas en la lista de usersTimeline
      const listItem = document.createElement("li");
      listItem.textContent = `${user.username}: ${user.timeline}`;
      timelineList.appendChild(listItem);
      
  });
  timelineDiv.style.display = "block";
}


 const buttonLogin = document.querySelector("#buttonLogin");
 buttonLogin.addEventListener("click", signIn);


 
