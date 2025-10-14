import type { Programa } from "@/types/domain";

export const mockProgramas: Programa[] = [
    {
        id: "p1",
        titulo: "Residência Front-end",
        instituicaoId: "i1",
        area: "frontend",
        modalidade: "online",
        nivel: "iniciante",
        publicoAlvo: ["estudantes", "juniores"],
        periodoInscricao: { inicio: "2025-09-20", fim: "2025-10-20" },
        editalUrl: "https://exemplo.com/edital.pdf",
        cidade: "Recife",
        estado: "PE",
        tags: ["react", "web"],
        resumo: "Formação prática em desenvolvimento front-end com foco em React.",
    },
    {
        id: "p2",
        titulo: "Trilha Dados & Analytics",
        instituicaoId: "i2",
        area: "dados",
        modalidade: "hibrido",
        nivel: "intermediario",
        publicoAlvo: ["graduandos", "transição de carreira"],
        periodoInscricao: { inicio: "2025-09-25", fim: "2025-11-01" },
        editalUrl: "https://exemplo.com/dados-edital.pdf",
        cidade: "São Paulo",
        estado: "SP",
        tags: ["python", "sql", "etl"],
        resumo: "Imersão em fundamentos de dados, ETL e visualização.",
    },
];
