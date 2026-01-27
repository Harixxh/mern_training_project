const fetchapi = async () => {
  try {
    const res = await fetch(
      'http://localhost:3000/task/getuser/697072aabbb55a39ad5e06bd'
    );

    const data = await res.json();

       console.log(data)
  } catch (err) {
    console.log(err);
  }
};

fetchapi();
