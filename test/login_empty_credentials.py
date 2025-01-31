from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located, all_of
from selenium.webdriver.common.by import By

chrome_options = Options()
chrome_options.add_argument("--headless")  # Mode headless pour CI/CD
chrome_options.add_argument("--no-sandbox")  # Évite les problèmes de permissions
chrome_options.add_argument("--disable-dev-shm-usage")  # Évite les erreurs de mémoire
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--remote-debugging-port=9222")

driver = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub",
    options=chrome_options
)

login = "http://localhost/login"
firstError = "Le nom d'utilisateur ne doit pas être vide"
secondError = "Le mot de passe ne doit pas être vide"

firstErrorPath = "//*[@id='root']/div/div[2]/div[1]"
secondErrorPath = "//*[@id='root']/div/div[2]/div[2]"

driver.get(login)

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