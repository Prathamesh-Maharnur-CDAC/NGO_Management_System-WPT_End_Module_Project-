import express from 'express'
import { fillApplicationForm, getAllApplicationFormData , updateNameInApplicationForm ,
    updateEmailInApplicationForm, updatePhoneInApplicationForm, updatePasswordInApplicationForm } from './src/controllers/roleController.js'; 
import {addCampaign, getAllCampaignData,updateCampaign, deleteCampaign, updateVolunteerByEmail } from  './src/controllers/roleController.js';
import {donateMoney, getAllDonationData} from './src/controllers/roleController.js';
import {createVolunteer, getAllVolunteerData, updateNameOfVolunteer,updateEmailOfVolunteer,
    updatePhoneOfVolunteer, updatePasswordOfVolunteer, updateDOBOfVolunteer, deleteVolunteer, volunteerLogin} from './src/controllers/roleController.js';
import {createAdmin, getAllAdminData, addVolunteerFromApplication, addAdminFromVolunteer} from './src/controllers/adminController.js'
import { connectDb } from './src/configs/DbConfig.js';
import { adminLogin, updatePasswordOfAdmin } from './src/controllers/TokenAdminLogin.js';
import { verifyToken } from './src/middlewares/verifyToken.js';
import cors from 'cors' 

const app = express();
app.use(cors());
app.use(express.json());

app.post("/fillApplicationForm", fillApplicationForm);
app.get("/getAllApplicationFormData", getAllApplicationFormData );
app.put("/updateNameInApplicationForm", updateNameInApplicationForm);
app.put("/updateEmailInApplicationForm", updateEmailInApplicationForm);
app.put("/updatePhoneInApplicationForm", updatePhoneInApplicationForm);
app.put("/updateDOBInApplicationForm", updatePhoneInApplicationForm);
app.put("/updatePasswordInApplicationForm", updatePasswordInApplicationForm);
app.post("/volunteerLogin",volunteerLogin);


app.post("/addCampaign", addCampaign);
app.get("/getAllCampaignData", getAllCampaignData);
app.put("/updateCampaign", updateCampaign);
app.delete("/deleteCampaign", deleteCampaign);

app.post("/donateMoney", donateMoney);
app.get("/getAllDonationData", getAllDonationData);


app.post("/createVolunteer", createVolunteer);
app.get("/getAllVolunteerData", getAllVolunteerData);
app.put("/updateNameOfVolunteer", updateNameOfVolunteer);
app.put("/updateEmailOfVolunteer", updateEmailOfVolunteer);
app.put("/updatePhoneOfVolunteer", updatePhoneOfVolunteer);
app.put("/updateDOBOfVolunteer", updateDOBOfVolunteer);
app.put("/updatePasswordOfVolunteer", updatePasswordOfVolunteer);
app.put("/updateDOBOfVolunteer", updateDOBOfVolunteer);
app.delete("/deleteVolunteer", deleteVolunteer);

app.post("/createAdmin",verifyToken, createAdmin);
app.post("/getAllAdminData",verifyToken, getAllAdminData);
app.post("/adminLogin",adminLogin);
app.put("/updatePasswordOfAdmin",verifyToken,updatePasswordOfAdmin)

app.put("/updateVolunteerByEmail", updateVolunteerByEmail);
app.post("/addVolunteerFromApplication",addVolunteerFromApplication)
app.post("/addAdminFromVolunteer", addAdminFromVolunteer);

app.listen(5000,()=>{
    connectDb();
});