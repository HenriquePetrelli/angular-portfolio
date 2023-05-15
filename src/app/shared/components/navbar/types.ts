export enum ModuleName {
     'home' = 'Home',
    'profile' = 'Profile',
     'skills' = 'Skills'
}

export interface IModule {
    module: Module[]
}

interface Module {
    name: string,
    icon: string,
    redirect: string
}