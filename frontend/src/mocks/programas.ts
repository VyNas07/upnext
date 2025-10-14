export interface Programa {
    id: string;
    titulo: string;
    instituicaoId: string;
    area: string;
    modalidade: string;
    nivel: string;
    resumo: string;
}

export const programasMock: Programa[] = [
    {
        id: "p1",
        titulo: "Residência Front-end",
        instituicaoId: "i1",
        area: "frontend",
        modalidade: "online",
        nivel: "iniciante",
        resumo: "Formação prática em desenvolvimento front-end com foco em React, TypeScript e modernas ferramentas de desenvolvimento."
    },
    {
        id: "p2",
        titulo: "Trilha Dados & Analytics",
        instituicaoId: "i2",
        area: "dados",
        modalidade: "hibrido",
        nivel: "intermediario",
        resumo: "Imersão em fundamentos de dados, ETL e visualização com Python, SQL e ferramentas de BI."
    },
    {
        id: "p3",
        titulo: "Cloud Computing Avançado",
        instituicaoId: "i3",
        area: "cloud",
        modalidade: "presencial",
        nivel: "avancado",
        resumo: "Especialização em arquiteturas cloud, DevOps e infraestrutura como código com AWS e Azure."
    },
    {
        id: "p4",
        titulo: "UX/UI Design Thinking",
        instituicaoId: "i1",
        area: "ux",
        modalidade: "online",
        nivel: "iniciante",
        resumo: "Fundamentos de design centrado no usuário, prototipagem e ferramentas de design modernas."
    }
];
