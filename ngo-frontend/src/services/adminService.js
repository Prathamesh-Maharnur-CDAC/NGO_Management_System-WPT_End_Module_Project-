export async function adminLogin(formData) {
  try {
    const response = await fetch("http://localhost:5000/adminLogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", "Bearer "+data.token);
      localStorage.setItem("email", formData.email);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePasswordOfAdmin(formData) {
  try {
    const token = localStorage.getItem("token"); 
    const response = await fetch(
      "http://localhost:5000/updatePasswordOfAdmin",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": token
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


export async function getAllAdminData() {
  try {
    const token = localStorage.getItem("token"); 
    const response = await fetch("http://localhost:5000/getAllAdminData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token 
      },
    });

    if (!response.ok) {
      console.error("Server responded with:", response.status);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function addAdminFromVolunteer(v_id) {
  try {
    const response = await fetch("http://localhost:5000/addAdminFromVolunteer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ v_id }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in addAdminFromVolunteer:", error);
    throw error;
  }
}


export async function getAllCampaignData(formData){
  try {
    const token = localStorage.getItem("token"); 
    const response = await fetch("http://localhost:5000/getAllCampaignData");

    if (!response.ok) {
      console.error("Server responded with:", response.status);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}