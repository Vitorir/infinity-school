anos = int(input("digite a quantidade de anos: "))
meses = int(input("digite a quantidade de meses: "))
dias = int(input("digite a quantidade de dias: "))

idade_em_dias = anos * 365 + meses * 30 + dias
print("A idade da pessoa em dias é: ", idade_em_dias)