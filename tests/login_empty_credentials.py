from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located, all_of
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

API_URL = "http://localhost:80"

options = Options()
options.add_argument("--headless")  # Pour exécuter Firefox sans interface graphique
driver = webdriver.Firefox(options=options)

firstError = "Le nom d'utilisateur ne doit pas être vide"
secondError = "Le mot de passe ne doit pas être vide"

firstErrorPath = "//*[@id='root']/div/div[2]/div[1]"
secondErrorPath = "//*[@id='root']/div/div[2]/div[2]"

driver.get(API_URL)

connectButton = driver.find_element(By.ID, "connect-button")

connectButton.click()

WebDriverWait(driver, 10).until(
    all_of(
        presence_of_element_located((By.XPATH, firstErrorPath)),
        presence_of_element_located((By.XPATH, secondErrorPath))
    )
)

firstErrorElement = driver.find_element(By.XPATH, firstErrorPath)
secondErrorElement = driver.find_element(By.XPATH, secondErrorPath)

assert firstErrorElement.text == firstError and secondErrorElement.text == secondError

driver.close()
