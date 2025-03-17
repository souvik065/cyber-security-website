

```javascript
import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types/ContactForm';

export const sendContactEmail = async (formData: ContactFormData) => {
    try {
        // Log the configuration (for debugging)
        console.log('EmailJS Config:', {
            serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        });
         // Hardcoded EmailJS credentials
         const serviceId = "service_0dntirj";
         const templateId = "template_5gwpjho";
         const publicKey = "onCqtMWx-iKu9dpX0tlOc";

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };
        const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      

        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
```


