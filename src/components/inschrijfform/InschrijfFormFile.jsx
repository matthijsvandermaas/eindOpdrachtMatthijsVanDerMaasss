// @flow
import * as React from 'react';
// import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {useForm} from "react-hook-form";
function InschrijfFormFile() {
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileData, setFileData] = useState({ file: null}); // Nieuwe lokale staat
    // const navigate = useNavigate();


    // async function handleFileSubmit() {
    //     const formData = new FormData();
    //
    //     // Voeg het bestand toe aan het FormData-object
    //     if (fileData.file) {
    //         formData.append('file', fileData.file);
    //     }
    //
    //     try {
    //         const response = await axios.post('http://localhost:8080/single/uploadDB', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //
    //         navigate('/home');
    //         console.log(response.data);
    //     } catch (e) {
    //         console.error(e);
    //         navigate('/error');
    //     }
    // }

    return (
        <>
            <div className="form-content border_top_bottom background">
                <div>
                    <label>Voeg een foto toe:</label>
                    <input
                        name="file"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFileData({ ...fileData, file: e.target.files && e.target.files[0] })}
                        required
                    />
                </div>
                {/*<button className="bttn" type="submit" disabled={isSubmitting} onClick={handleFileSubmit}>*/}
                {/*    {isSubmitting? 'Bezig met een foto toevoegen...' : 'toevoegen'}*/}
                {/*</button>*/}
            </div>
        </>
    );
}

export default InschrijfFormFile;
