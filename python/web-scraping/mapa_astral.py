from selenium import webdriver
from selenium.webdriver.common import By
from selenium.webdriver.keys import Keys
import func

def meu_mapa():
    voltar = 1
    while voltar != 0:
        nome = str(input("Digite o seu nome: "))

        

        driver = webdriver.Chrome()
        driver.get("https://www.google.com.br/maps/place/Rio+de+Janeiro/@-23.5522000,-46.6500000,17z/data=!3m1!4b1!4m5!3m4!1s0x3a19606000000000:0x3a19607000000000!8m2!3d-23.5522000!4d-46.6500000")
        driver.maximize_window()
        driver.implicitly_wait(10)
        driver.find_element_by_xpath("//button[@class='gLFyf']").click()