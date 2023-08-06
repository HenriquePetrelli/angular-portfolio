export enum AsideButtons {
  WhatsApp = 'whatsApp',
  Linkedin = 'linkedin',
  Email = 'email',
  Github = 'github'
}

export interface AsideToolbarButtons {
  buttonLabel: string;
  iconPath: string;
  baseUrl?: string;
  phoneNumber?: string;
  textMessage?: string;
  emailAdress?: string;
  userName?: string;
}
