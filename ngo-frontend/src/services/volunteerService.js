export async function volunteerLogin(formData) {
  try {
    const response = await fetch("http://localhost:5000/volunteerLogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if(response.status === 200){
      localStorage.clear();
      // console.log(formData.email)
      localStorage.setItem("email", formData.email)
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllVolunteerData() {
  try {
    const response = await fetch("http://localhost:5000/getAllVolunteerData");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateNameOfVolunteer(formData) {
  try {
    const response = await fetch(
      "http://localhost:5000/updateNameOfVolunteer",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.log(error);
  }
}

// export async function getAllApplicationFormData() {
//   try {
//     const response = await fetch(
//       "http://localhost:5000/getAllApplicationFormData"
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

export async function updatePasswordOfVolunteer(formData) {
  try {
    const response = await fetch(
      "http://localhost:5000/updatePasswordOfVolunteer",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.log(error);
  }
}

export async function updatePhoneOfVolunteer(formData) {
  try {
    const response = await fetch(
      "http://localhost:5000/updatePhoneOfVolunteer",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteVolunteer(formData) {
  try {
    const response = await fetch("http://localhost:5000/deleteVolunteer", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.log(error);
  }
}
