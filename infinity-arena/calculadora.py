def main():
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))
    op = input("Digite o operador matemático (+, -, *, /): ")

    if op == "+":
        resultado = num1 + num2
    elif op == "-":
        resultado = num1 - num2
    elif op == "*":
        resultado = num1 * num2
    elif op == "/":
        resultado = num1 / num2
    else:
        print("Operador inválido. Tente novamente.")
        return

    print("O resultado é: ", resultado)

if __name__ == '__main__':
    main()
