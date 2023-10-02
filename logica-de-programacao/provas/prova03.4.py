numero = int(input("Digite um numero entre 1 e 100: "))

for i in range(2, numero):
    primo = True
    if numero % i == 0:
        primo = False
        break


if primo:
    print(f'{numero} é um número primo')
else:
    print(f'{numero} não é um número primo')
