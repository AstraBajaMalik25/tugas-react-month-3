function App() {
  const profiles = [
    { name: "Baja Malik", photoUrl: "https://www.w3schools.com/howto/img_avatar.png", skills: ["masak indomie, Blender modelling"] },
    { name: "Malik Baja", photoUrl: "https://www.w3schools.com/howto/img_avatar2.png", skills: ["HTML", "CSS"] },
    { name: "Maja Balik", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: ["beres-beres kamar"] },
    { name: "Jaba likma", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: ["makan"] },
    { name: "Ajab Kalib", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: [] },
    { name: "Maba Balik", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: ["beres-beres kamar"] },
    { name: "Jaa Amlik", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: ["cuci baju"] },
    { name: "aja Bali", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: ["basket"] }, 
    { name: "Maja", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: ["Coding"] },
    { name: "Balik", photoUrl: "https://www.w3schools.com/w3images/avatar2.png", skills: [] }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {profiles.map((profile, index) => (
        <div
          key={index} 
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            width: "220px",
            textAlign: "center",
            margin: "10px",
            backgroundColor: "#fff"
          }}
        >
          <img
            src={profile.photoUrl}
            alt={profile.name}
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <h2 style={{ color: "black" }}>{profile.name}</h2>
          

<h3 style={{ fontSize: "14px", color: "blue" }}>Skills:</h3>
<p style={{ fontSize: "13px", color: "black" }}>
  {profile.skills && profile.skills.length > 0 
    ? profile.skills.join(", ") 
    : "belum ada skill"}
</p>
          <ul style={{ listStyle: "disc", paddingLeft: "20px", textAlign: "left" }}>
            {profile.skills.length > 0 ? (
              profile.skills.map((skill, i) => <li key={i}>{skill}</li>)
            ) : (
              <li>No skills listed</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;