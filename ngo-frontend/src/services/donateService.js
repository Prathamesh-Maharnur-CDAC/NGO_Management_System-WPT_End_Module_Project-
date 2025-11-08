export async function donateMoney(formData){
    try {
        const response = await fetch("http://localhost:5000/donateMoney", {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllDonationData(){
    try {
        const response = await fetch("http://localhost:5000/getAllDonationData");
    const data = await response.json();
    return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}