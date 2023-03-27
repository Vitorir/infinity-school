def nascimento():
    # Captando o dia
    while True:
        dia = input('Digite o dia em que nasceu:')
        if dia.isnumeric() and int(dia) >= 1 and int(dia) <=31:
            if len(dia) == 1:
                dia = '0' + dia
            break
        else:
            print('\nO dia precisa ser numérico entre 1 e 31!\n')
            pass

    # Captando o mês
    while True:
        mes = input('Digite o mês em que nasceu:')
        if mes.isnumeric() and int(mes) >= 1 and int(mes) <= 12:
            if len(mes) == 1:
                mes = '0' + mes
            break
        else:
            print('\nO mês precisa ser numérico entre 1 e 12!\n')
            pass

    data_nascimento = f'{dia}/{mes}'
    return data_nascimento
