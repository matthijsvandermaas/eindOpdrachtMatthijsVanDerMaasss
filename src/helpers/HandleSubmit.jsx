// import {useState} from "react";
//
// function handleSubmit({Error1, Error2, errorMessage, SubmittinBttnActive, SubmittinBttnInactive }){
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//
//     const handleInputChange = (e) => {
//         const {product, value } = e.target;
//         setFormData({
//             ...formData,
//             [product]: value
//         });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         try {
//             const response = await axios.post('http://localhost:8081/particulieren', formData);
//             const responseData = response?.data;
//             console.log("Response Data:", response.data);
//             console.log(formData);
//             if (response && response.data) {
//                 console.log(response.data);
//                 setErrorMessage('');
//             } else {
//                 console.error('Fout bij het versturen van het verzoek: ongeldige reactie');
//                 setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
//             }
//         } catch (error) {
//             console.error('Fout bij het versturen van het verzoek:', error);
//             if (error.response && error.response.status) {
//                 console.log("Fout Status Code:", error.response.status);
//             }
//             setErrorMessage('Er is een fout opgetreden bij de inschrijving. Probeer het later opnieuw.');
//
//         } finally {
//             setIsSubmitting(false);
//         }
//     };
// }
// export default handleSubmit;