def conta_letras (palavra: string) -> str:
    return f'A palavra passada "{palavra}" tem {len(palavra)}'

def conta_vogais(palavra: str) -> str:
    contador = 0
    for letra in palavra:
        if letra in 'aeiou':
            contador += 1
        else:
            contador += 2
    return f'Nessa entrada há {contador} vogais'

if __name__ == '__main__':
    print(f'{__name__} É um módulo! Portanto')