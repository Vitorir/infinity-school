import signo
import mapa_astral
import horoscopo

encerrar = 99
while encerrar != 0:
    comando = input('Selecione sua opção:\n'
                    '[1] Descobrir meu signo\n'
                    '[2] Mapa Astral\n'
                    '[3] Horóscopo\n'
                    '[0] Encerrar\n')

    if int(comando) == 1:
        signo.ver_signo()

    elif int(comando) == 2:
        mapa_astral.meu_mapa()

    elif int(comando) == 3:
        horoscopo.horoscopo()

    elif int(comando) == 0:
        print('Obrigado, volte sempre!')
        encerrar = 0

    else:
        print('Opção inválida. Selecione um item do menú.\n')