import urllib.request
from bs4 import BeautifulSoup

def horoscopo():
    signos = ['aries', 'touro', 'gemeos', 'cancer', 'leao', 'virgem', 'libra', 'escorpiao', 'sagitario', 
              'capricornio', 'aquario', 'peixes', 'invalido']
    
    while True:
        signo = int(input('Qual seu signo?\n[1] Áries\n[2] Touro\n[3] Gêmeos\n[4] Câncer\n'
        '[5] Leão\n[6] Virgem\n[7] Libra\n[8] Escorpião\n[9] Sargitário\n'
        '[10] Capricórnio\n[11] Aquário\n[12] Peixes\n[0] Voltar ao menú anterior.\n'))

        if 0 < signo < 13:
            url = f'http://www.horoscopovirtual.com.br/horoscopo/{signos[signo-1]}'
            
            # Código para header:
            header = ({'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 \
                        (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 OPR/93.0.0.0',\
                        'Accept-Language': 'en-US, en;q=0.5'})
            
            
            # Código para request:
            request = urllib.request.Request(url, headers=header)
            abrir = urllib.request.urlopen(request)
            
            # Código para o response:
            response = urllib.request.urlopen(request)
            
            # Código para o html:
            html = response.read().decode('utf-8')
            
            # Código para o soup:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Código para a lista de páginas:
            páginas = soup.find_all('div', {'class': 'item'})


            texto = soup.find('p', {'class': 'text-pred'}).get_text()

            # Tirar a string 'Importante'
            print(texto[:-13:])

            # opção pra voltar o menu
            while True:
                outro = int(input('Você gostaria de verificar outro horóscopo?\n'
                                  '[1] Sim\n'
                                  '[2] Não, retorne para o menu principal\n'))
                if outro == 1:
                    print('')
                    break
                elif outro == 0:
                    print('')
                    pass
                break
            break
        else:
            print('Digite apenas numeros entre 1 e 12!')

