# Calculo_ De Notas
Sistema de calculo de notas e aprovação/reprovação de alunos.
Regras:
Calcular a situação de cada aluno baseado na média das 3 provas (P1, P2 e P3), conforme a  tabela: 
Média (m) Situação:
m<5  - Reprovado por Nota
5<=m<7  - Exame Final
m>=7  - Aprovado

Caso o número de faltas ultrapasse 25% do número total de aulas o aluno terá a situação  "Reprovado por Falta", independente da média.  Caso a situação seja "Exame Final" é necessário calcular a "Nota para Aprovação Final"(naf) de  cada aluno de acordo com seguinte fórmula: 

5 <= (m + naf)/2

Caso a situação do aluno seja diferente de "Exame Final", preencha o campo "Nota para  Aprovação Final" com 0. 


