import { ExperienceItem, ExperiencePeriodLabels } from "./types";

export const experiences: { [key: string]: Array<ExperienceItem> } = {
    ptBR: [
        {
            title: 'Warren Investimentos',
            location: 'Porto Alegre - Rio Grande do Sul, Brasil',
            model: 'Remoto',
            description:
              'A Warren é a primeira corretora de investimentos e gestora de patrimônio a aplicar no Brasil o modelo de investimentos por objetivos, autorizada e regulada pela CVM.',
            isCurrent: true,
            current: 'Atual',
            startDate: '2021-08',
            endDate: '',
            logo: '../../../assets/img/warren_logo.jpeg',
            subItems: [
              {
                date: '08/2022',
                title: 'Desenvolvedor de Software Front-end Pleno'
              },
              {
                date: '08/2021',
                title: 'Desenvolvedor de Software Front-end Júnior'
              }
            ],
            results: [
              'Professor do curso de programação (Warren Tech Academy) ofertado pela empresa para alunos do SENAC-RS',
              'Planejamento focado em software para implementação de acessibilidade na empresa',
              'Desenvolvimento de extensão de snippets no VS Code para uso da empresa'
            ],
            softSkills: ['Trabalho em equipe e autonomia nas atividades diárias'],
            hardSkills: ['VueJs', 'Typescript', 'Less'],
            images: ['']
          },
          {
            title: 'VEGA I.T',
            location: 'Curitiba - Paraná, Brasil',
            model: 'Híbrido',
            description:
              'A VEGA I.T é uma empresa que oferece um portfólio de soluções tecnológicas para hotéis, pousadas, resorts e motéis de todos os portes.',
            startDate: '2021-04',
            endDate: '2021-08',
            isCurrent: false,
            current: '',
            logo: '../../../assets/img/vega_it.jpeg',
            subItems: [
              {
                date: '04/2021',
                title: 'Desenvolvedor de Software Front-end Júnior'
              }
            ],
            results: [
              'Professor do curso de programação (Warren Tech Academy) ofertado pela empresa para alunos do SENAC-RS',
              'Planejamento focado em software para implementação de acessibilidade na empresa',
              'Desenvolvimento de extensão de snippets no VS Code para uso da empresa'
            ],
            softSkills: ['Trabalho em equipe e autonomia nas atividades diárias'],
            hardSkills: ['VueJs', 'Typescript', 'Less'],
            images: ['']
          },
          {
            title: 'MadeiraMadeira',
            location: 'Curitiba - Paraná, Brasil',
            model: 'Remoto',
            description:
              'Maior loja online de móveis e decoração da América Latina. É considerada uma startup unicórnio que trabalha no mercado de varejo.',
            startDate: '2020-12',
            endDate: '2021-03',
            isCurrent: false,
            current: '',
            logo: '../../../assets/img/madeira_madeira.jpeg',
            subItems: [
              {
                date: '03/2021',
                title: 'Desenvolvedor de Software Front-end Pleno'
              }
            ],
            results: [
              'Professor do curso de programação (Warren Tech Academy) ofertado pela empresa para alunos do SENAC-RS',
              'Planejamento focado em software para implementação de acessibilidade na empresa',
              'Desenvolvimento de extensão de snippets no VS Code para uso da empresa'
            ],
            softSkills: ['Trabalho em equipe e autonomia nas atividades diárias'],
            hardSkills: ['VueJs', 'Typescript', 'Less'],
            images: ['']
          },
          {
            title: 'Fast Medic - Sistemas de Gestão em Saúde',
            location: 'Curitiba - Paraná, Brasil',
            model: 'Híbrido',
            description:
              'A FastMedic tem como principal objetivo a eficiência da gestão da saúde local e na qualidade de vida do cidadão e a partir dessa premissa, disponibiliza ferramentas completas e de uso simplificado para a saúde pública.',
            startDate: '2019-02',
            endDate: '2020-11',
            isCurrent: false,
            current: '',
            logo: '../../../assets/img/fast_medic.jpeg',
            subItems: [
              {
                date: '10/2019',
                title: 'Desenvolvedor de Software Front-end Júnior'
              },
              {
                date: '07/2019',
                title: 'Assistente'
              },
              {
                date: '02/2019',
                title: 'Estagiário'
              }
            ],
            results: [
              'Professor do curso de programação (Warren Tech Academy) ofertado pela empresa para alunos do SENAC-RS',
              'Planejamento focado em software para implementação de acessibilidade na empresa',
              'Desenvolvimento de extensão de snippets no VS Code para uso da empresa'
            ],
            softSkills: ['Trabalho em equipe e autonomia nas atividades diárias'],
            hardSkills: ['VueJs', 'Typescript', 'Less'],
            images: ['']
          },
          {
            title: 'Hype Empreendimentos',
            location: 'Curitiba - Paraná, Brasil',
            model: 'Remoto',
            description:
              'A Hype Empreendimentos atua no ramo da construção civil, objetivando velocidade de vendas e rentabilidade significativamente superiores aos praticados no mercado.',
            startDate: '2018-12',
            endDate: '2019-01',
            isCurrent: false,
            current: '',
            logo: '../../../assets/img/hype_empreendimentos.jpeg',
            subItems: [
              {
                date: '12/2018',
                title: 'Freelancer'
              }
            ],
            results: [
              'Professor do curso de programação (Warren Tech Academy) ofertado pela empresa para alunos do SENAC-RS',
              'Planejamento focado em software para implementação de acessibilidade na empresa',
              'Desenvolvimento de extensão de snippets no VS Code para uso da empresa'
            ],
            softSkills: ['Trabalho em equipe e autonomia nas atividades diárias'],
            hardSkills: ['VueJs', 'Typescript', 'Less'],
            images: ['']
          },
          {
            title: 'TAO - Treinamento de desenvolvimento de programas computacionais',
            location: 'Curitiba - Paraná, Brasil',
            model: 'Remoto',
            description:
              'TAO é uma empresa que possui seu escopo em gestão para a área de educação como: portal educacional para alunos e professores, chamadas interativas, controle de presenças de alunos, armazenamento de conteúdos dados em aula, e muito mais.',
            startDate: '2018-11',
            endDate: '2019-01',
            isCurrent: false,
            current: '',
            logo: '../../../assets/img/office_building.png',
            subItems: [
              {
                date: '11/2018',
                title: 'Estagiário'
              }
            ],
            results: [
              'Professor do curso de programação (Warren Tech Academy) ofertado pela empresa para alunos do SENAC-RS',
              'Planejamento focado em software para implementação de acessibilidade na empresa',
              'Desenvolvimento de extensão de snippets no VS Code para uso da empresa'
            ],
            softSkills: ['Trabalho em equipe e autonomia nas atividades diárias'],
            hardSkills: ['VueJs', 'Typescript', 'Less'],
            images: ['']
          },
          {
            title: 'Record TV',
            location: 'Curitiba - Paraná, Brasil',
            model: 'Presencial',
            description:
              'Record TV é uma rede de televisão comercial aberta brasileira. Atualmente é a segunda maior emissora de TV comercial do Brasil.',
            startDate: '2016-11',
            endDate: '2018-10',
            isCurrent: false,
            current: '',
            logo: '../../../assets/img/record_tv.png',
            subItems: [
              {
                date: '11/2016',
                title: 'Estagiário'
              }
            ],
            results: [
              'Professor do curso de programação (Warren Tech Academy) ofertado pela empresa para alunos do SENAC-RS',
              'Planejamento focado em software para implementação de acessibilidade na empresa',
              'Desenvolvimento de extensão de snippets no VS Code para uso da empresa'
            ],
            softSkills: ['Trabalho em equipe e autonomia nas atividades diárias'],
            hardSkills: ['VueJs', 'Typescript', 'Less'],
            images: ['']
          },
    ],
  enUS: [
    {
        title: 'Warren Investments',
        location: 'Porto Alegre - Rio Grande do Sul, Brazil',
        model: 'Remote',
        description:
          'Warren is the first investment brokerage and asset manager in Brazil to apply the goal-based investment model, authorized and regulated by the CVM.',
        isCurrent: true,
        current: 'Current',
        startDate: '2021-08',
        endDate: '',
        logo: '../../../assets/img/warren_logo.jpeg',
        subItems: [
          {
            date: '08/2022',
            title: 'Mid-level Front-end Software Developer'
          },
          {
            date: '08/2021',
            title: 'Junior Front-end Software Developer'
          }
        ],
        results: [
          'Instructor for the programming course (Warren Tech Academy) offered by the company to SENAC-RS students',
          'Focused planning on software for implementing accessibility within the company',
          'Developed VS Code snippets extension for company use'
        ],
        softSkills: ['Teamwork and autonomy in daily activities'],
        hardSkills: ['VueJs', 'Typescript', 'Less'],
        images: ['']
      },
      {
        title: 'VEGA I.T',
        location: 'Curitiba - Paraná, Brazil',
        model: 'Hybrid',
        description:
          'VEGA I.T is a company that offers a portfolio of technological solutions for hotels, inns, resorts, and motels of all sizes.',
        startDate: '2021-04',
        endDate: '2021-08',
        isCurrent: false,
        current: '',
        logo: '../../../assets/img/vega_it.jpeg',
        subItems: [
          {
            date: '04/2021',
            title: 'Junior Front-end Software Developer'
          }
        ],
        results: [
          'Instructor for the programming course (Warren Tech Academy) offered by the company to SENAC-RS students',
          'Focused planning on software for implementing accessibility within the company',
          'Developed VS Code snippets extension for company use'
        ],
        softSkills: ['Teamwork and autonomy in daily activities'],
        hardSkills: ['VueJs', 'Typescript', 'Less'],
        images: ['']
      },
      {
        title: 'MadeiraMadeira',
        location: 'Curitiba - Paraná, Brazil',
        model: 'Remote',
        description:
          'Largest online furniture and decoration store in Latin America. It is considered a unicorn startup working in the retail market.',
        startDate: '2020-12',
        endDate: '2021-03',
        isCurrent: false,
        current: '',
        logo: '../../../assets/img/madeira_madeira.jpeg',
        subItems: [
          {
            date: '03/2021',
            title: 'Mid-level Front-end Software Developer'
          }
        ],
        results: [
          'Instructor for the programming course (Warren Tech Academy) offered by the company to SENAC-RS students',
          'Focused planning on software for implementing accessibility within the company',
          'Developed VS Code snippets extension for company use'
        ],
        softSkills: ['Teamwork and autonomy in daily activities'],
        hardSkills: ['VueJs', 'Typescript', 'Less'],
        images: ['']
      },
      {
        title: 'Fast Medic - Health Management Systems',
        location: 'Curitiba - Paraná, Brazil',
        model: 'Hybrid',
        description:
          'FastMedic aims to improve local health management and citizens’ quality of life by providing comprehensive and user-friendly tools for public health.',
        startDate: '2019-02',
        endDate: '2020-11',
        isCurrent: false,
        current: '',
        logo: '../../../assets/img/fast_medic.jpeg',
        subItems: [
          {
            date: '10/2019',
            title: 'Junior Front-end Software Developer'
          },
          {
            date: '07/2019',
            title: 'Assistant'
          },
          {
            date: '02/2019',
            title: 'Trainee'
          }
        ],
        results: [
          'Instructor for the programming course (Warren Tech Academy) offered by the company to SENAC-RS students',
          'Focused planning on software for implementing accessibility within the company',
          'Developed VS Code snippets extension for company use'
        ],
        softSkills: ['Teamwork and autonomy in daily activities'],
        hardSkills: ['VueJs', 'Typescript', 'Less'],
        images: ['']
      },
      {
        title: 'Hype Empreendimentos',
        location: 'Curitiba - Paraná, Brazil',
        model: 'Remote',
        description:
          'Hype Empreendimentos operates in the civil construction sector, aiming for significantly higher sales speed and profitability than market standards.',
        startDate: '2018-12',
        endDate: '2019-01',
        isCurrent: false,
        current: '',
        logo: '../../../assets/img/hype_empreendimentos.jpeg',
        subItems: [
          {
            date: '12/2018',
            title: 'Freelancer'
          }
        ],
        results: [
          'Instructor for the programming course (Warren Tech Academy) offered by the company to SENAC-RS students',
          'Focused planning on software for implementing accessibility within the company',
          'Developed VS Code snippets extension for company use'
        ],
        softSkills: ['Teamwork and autonomy in daily activities'],
        hardSkills: ['VueJs', 'Typescript', 'Less'],
        images: ['']
      },
      {
        title: 'TAO - Training for Computer Program Development',
        location: 'Curitiba - Paraná, Brazil',
        model: 'Remote',
        description:
          'TAO is a company that specializes in education management, including an educational portal for students and teachers, interactive calls, student attendance control, content storage, and much more.',
        startDate: '2018-11',
        endDate: '2019-01',
        isCurrent: false,
        current: '',
        logo: '../../../assets/img/office_building.png',
        subItems: [
          {
            date: '11/2018',
            title: 'Trainee'
          }
        ],
        results: [
          'Instructor for the programming course (Warren Tech Academy) offered by the company to SENAC-RS students',
          'Focused planning on software for implementing accessibility within the company',
          'Developed VS Code snippets extension for company use'
        ],
        softSkills: ['Teamwork and autonomy in daily activities'],
        hardSkills: ['VueJs', 'Typescript', 'Less'],
        images: ['']
      },
      {
        title: 'Record TV',
        location: 'Curitiba - Paraná, Brazil',
        model: 'Internship',
        description:
          'Record TV is a Brazilian commercial open television network. It is currently the second-largest commercial TV network in Brazil.',
        startDate: '2016-11',
        endDate: '2018-10',
        isCurrent: false,
        current: '',
        logo: '../../../assets/img/record_tv.png',
        subItems: [
          {
            date: '11/2016',
            title: 'Trainee'
          }
        ],
        results: [
          'Instructor for the programming course (Warren Tech Academy) offered by the company to SENAC-RS students',
          'Focused planning on software for implementing accessibility within the company',
          'Developed VS Code snippets extension for company use'
        ],
        softSkills: ['Teamwork and autonomy in daily activities'],
        hardSkills: ['VueJs', 'Typescript', 'Less'],
        images: ['']
      }
  ],
};

export const experiencePeriodLabels: { [key: string]: ExperiencePeriodLabels } = {
  ptBR: {
    yearLabel: 'ano',
    yearsLabel: 'anos',
    monthLabel: 'mês',
    monthsLabel:'meses',
    conjunction: 'e'
  },
  enUS:{
    yearLabel: 'year',
    yearsLabel: 'years',
    monthLabel: 'month',
    monthsLabel:'months',
    conjunction: 'and'
  }
}