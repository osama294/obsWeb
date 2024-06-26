import axios from 'axios';

export const submitHireUs = async (formData) => {
    try {
        console.log('Form data on the API side: ======= ', formData);

        const response = await axios.post('http://192.168.100.88:8000/api/submitHireUs', formData);
        return response.data;
    } catch (error) {
        console.error("There was an error submitting the form!", error);
        throw error;
    }
};
