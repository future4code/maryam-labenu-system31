// Turmas
export type classes = {
   nome: string,
   modulo: string,
}

// Módulos
export enum classesMod {
   MOD0 = "Onboarding",
   MOD1 = "Módulo 01",
   MOD2 = "Módulo 02",
   MOD3 = "Módulo 03",
   MOD4 = "Módulo 04",
   MOD5 = "Módulo 05",
   MOD6 = "Módulo 06"
}

export class Classes {

   private nome: string
   modulo: classesMod

   constructor(
      nome: string,
      modulo: classesMod,
   ) {
      this.nome = nome
      this.modulo = modulo
   }

   getName(): string {
      return this.nome
   }

   public getClass(): classesMod {
      return this.modulo
   }

}