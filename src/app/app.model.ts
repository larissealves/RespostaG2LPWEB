export class Aluno {
    cpf: number
    nome: string;
    senha: string;
    dataNascimento: any;
    cursos?:Array<String>;

    constructor(cpf: number, nome: string, senha: string, dataNascimento: any, cursos: Array<String>){
        this.cpf = cpf;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.cursos = cursos;
    }
}


export class Curso {
    titulo: string
    descricao: string;
    professores: any;
    aulas?:Array<String>;
    categorias: string;
   
    constructor(titulo: string, descricao: string, professores: any, aulas: Array<String>, categorias: string){
        this.titulo = titulo;
        this.descricao = descricao;
        this.professores = professores;
        this.aulas = aulas;
        this.categorias = categorias;
    }
}

export class Aula{
    curso: number;
    titulo: string
    tempoDuracao: string;
 
    constructor(curso: number, titulo: string, tempoDuracao: string){
        this.curso = curso;
        this.titulo = titulo;
        this.tempoDuracao = tempoDuracao;
    }
}

export class Exercicio{
    aula: number;
    exercicio?: any;
   // opcoes?: any;
   // respostaCerta?: any;
 
    constructor(aula: number, exercicio: any){
        this.aula = aula;
        this.exercicio = exercicio;
        //this.opcoes = opcoes;
        //this.respostaCerta = respostaCerta;
    }
}

export class Professor {
   nome: string
    
    constructor(nome: string){
    this.nome = nome;
    }
}

export class Resposta {
    resposta: any;
     
    constructor(resposta: any){
     this.resposta = resposta;
    }
 }
 