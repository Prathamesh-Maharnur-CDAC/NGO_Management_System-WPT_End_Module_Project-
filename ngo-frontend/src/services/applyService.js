export async function fillApplicationForm(formData){
    try {
        const response = await fetch("http://localhost:5000/fillApplicationForm", {
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

export async function getAllApplicantsData(){
    try {
        const response = await fetch("http://localhost:5000/getAllApplicationFormData");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}