from prettytable import PrettyTable

# criando tabela
table = PrettyTable()
table.field_names = ["ALUNO (A)", "NOTA"]

table.add_row(["ALINE", 9.0])
table.add_row(["MaRIO", "DEZ"])



print(table)