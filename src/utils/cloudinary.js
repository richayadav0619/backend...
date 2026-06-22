import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


    
// (async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET  // Click 'View API Keys' above to copy your API secret
    });

    // console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    // console.log("API Key:", process.env.CLOUDINARY_API_KEY);
    // console.log(
    //             "Secret Length:",
    //             process.env.CLOUDINARY_API_SECRET?.length
    // );
    
    
    const uploadOnCloudinary = async (localFilePath) =>{
        try {
            if(!localFilePath) return null
            //upload the file on cloudinary

            console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
            console.log("Uploading:", localFilePath);

            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            // file has been uploaded successfully
            //console.log("file isl uploaded on cloudinary ", response.secure_url);

            fs.unlinkSync(localFilePath)
            return response;

        }catch(error) {
            console.log("CLOUDINARY ERROR:");
            console.log(error);

            if(localFilePath){
                fs.unlinkSync(localFilePath);
            }

    return null;
}
    }



export {uploadOnCloudinary}

    
    

    
     