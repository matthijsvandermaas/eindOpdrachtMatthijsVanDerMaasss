import React, { useState, useEffect } from "react";
import axios from "axios";

const FileUpload = () => {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const file_1 = "drie_ringen.png";
        // const file_2 = "hertog_jan.png";
        // const file_3 = "van_der_streek.png";
        const fetchImage = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/images/${file_1}`, {
                    responseType: "arraybuffer",
                });

                const base64Image = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ""
                    )
                );

                const imageSrc = `data:${response.headers["content-type"].toLowerCase()};base64,${base64Image}`;
                setImageSrc(imageSrc);
            } catch (error) {
                console.error("Error fetching image:", error);
            }
        };

        fetchImage(file_1);
    }, []);

    return <img src={imageSrc} alt="Drie Ringen" />;
};

export default FileUpload;
