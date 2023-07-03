
function UserComponent({user, hideUser}) {

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id='uservision'>
        
        <button className="user-button" onClick={hideUser()}>X</button>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

    </div>
    
  );
}

export default UserComponent;