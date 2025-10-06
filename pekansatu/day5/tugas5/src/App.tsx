import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({ name: "Baja", age: 17 });

  const increaseAge = () => {
    setUser(prev => ({ ...prev, age: prev.age + 1 }));  
  };

      const decreaseAge = () => {
    setUser(prev => ({ ...prev, age: prev.age - 1 }));
  };



  return (
    <div>
      <p>{user.name} — {user.age} tahun</p>
      <button onClick={increaseAge}>Tambah Umur</button>
      <button onClick={decreaseAge}>Kurangin umur</button>
    </div>
  );
}

export default Profile;


