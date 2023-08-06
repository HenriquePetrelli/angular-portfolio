import { ButtonLabel, EmailForm } from "./types"

export const thanksMessage: { [key: string]: string } = {
    ptBR: "Fico muito feliz em poder compartilhar um pouco da minha vida com você, espero que tenha gostado!",
    enUS: "I'm very happy to be able to share a little bit of my life with you, I hope you enjoyed it!",
}

export const feedbackMessage: { [key: string]: string } = {
    ptBR: "Sinta-se a vontade para me enviar uma mensagem. Seja ela um feedback, alguma sugestão, interesse sobre vaga, ou apenas para conversarmos!",
    enUS: "Feel free to send me a message. Whether it's feedback, a suggestion, interest in a vacancy, or just to chat!",
}

export const formLabels: { [key: string]: EmailForm } = {
    ptBR: {
        recruiter: "Sou recrutador",
        name: 'Nome',
        email: "Email",
        ocupation: "Ocupação",
        message: "Mensagem",
        celphone: "Celular",
        companyName: "Nome da empresa",
        companyWebsite: "Site da empresa",
        buttonLabel: "Enviar email"
    },
    enUS: {
        recruiter: "I'm recruiter",
        name: 'Name',
        email: "Email",
        ocupation: "Ocupation",
        message: "Message",
        celphone: "Celphone",
        companyName: "Company name",
        companyWebsite: "Company website",
        buttonLabel: "Send email"
    }
}

export const buttonLabel: { [key: string]: ButtonLabel } = {
    ptBR: {
        sendEmail: "Enviar email",
        emailSent: "Email enviado!"
    },
    enUS:  {
        sendEmail: "Send email",
        emailSent: "Email sent!"
    }
}
