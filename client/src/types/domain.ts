export type Instituicao = {
    id: string;
    nome: string;
    site?: string;
    logoUrl?: string;
    descricao?: string;
};

export type Programa = {
    id: string;
    titulo: string;
    instituicaoId: string;
    area: "frontend" | "backend" | "dados" | "cloud" | "ux" | "mobile" | "seguranca";
    modalidade: "presencial" | "online" | "hibrido";
    nivel: "iniciante" | "intermediario" | "avancado";
    publicoAlvo: string[];
    periodoInscricao: { inicio: string; fim: string };
    editalUrl?: string;
    cidade?: string;
    estado?: string;
    tags?: string[];
    resumo?: string;
};

export type Usuario = {
    id: string;
    nome: string;
    email: string;
    interesses: string[];
    favoritos: string[];
};
