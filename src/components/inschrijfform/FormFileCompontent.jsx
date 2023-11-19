import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

function FormFileCompontent() {
    const { register, handleSubmit } = useForm();
    const [fileData, setFileData] = useState({ file: null });
    const [fileData2, setFileData2] = useState({ file: null });
    async function handleFileSubmit() {
        setIsSubmitting(true);
        const fileInfo = new FormData();
        if (fileData.file) {
            fileInfo.append('file', fileData.file);
        }

        try {
            // Verstuur beide bestanden naar de server
            const createProductWithPhoto = await axios.post('http://localhost:8081/fileDocuments/upload', fileInfo, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true,
            });

            console.log('De gegevens zijn verstuurd', fileInfo, createProductWithPhoto.data);
        } catch (e) {
            console.error('Er gaat iets fout met het verwerken van de files', e);
            setErrorMessage('Er gaat iets fout met het verwerken van de files: ' + e.message);
        } finally {
            setIsSubmitting(false);
            console.log('Product form submission completed');
        }
    }
    return (
        // <form className="background  border_top_bottom" onSubmit={handleSubmit(handleFormSubmit)} encType="multipart/form-data">

        <div className="form-content">
            <div>
                <label>Voeg een foto toe:</label>
                <input name="file" type="file" accept="image/*" {...register('file', { required: 'Bestand is verplicht' })} />
                {/*<div className=" background"  >*/}
                {/*{/!*<FormFileComponent setFileData={setFileData} OnChangeLink={handleFileSubmit}/>*}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default FormFileCompontent;
