export interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    subject: string
    message: string
  }

 export interface ContactFormErrors {
    firstName?: string
    lastName?: string
    email?: string
    subject?: string
    message?: string
  }