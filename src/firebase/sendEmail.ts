import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

import { ContactFormData } from '../types/ContactForm';



const sesClient = new SESClient({
    region: import.meta.env.VITE_AWS_REGION,
    credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
    }
});

export const sendContactEmail = async (formData:ContactFormData) => {
    try {
        const params = {
            Destination: {
                ToAddresses: ['23mcab03@kristujayanti.com']
            },
            Message: {
                Body: {
                    Text: { Data: formData.message }
                },
                Subject: { Data: formData.subject }
            },
            Source: import.meta.env.VITE_AWS_SES_EMAIL
        };

        const command = new SendEmailCommand(params);
        const result = await sesClient.send(command);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
