import axios from 'axios';

export const submitContactUs = async (formData) => {
    try {
        console.log('Form data on the API side: ======= ', formData);

        const response = await axios.post('http://192.168.100.88:8000/api/submitContact', formData);
        return response.data;
    } catch (error) {
        console.error("There was an error submitting the form!", error);
        throw error;
    }
};
