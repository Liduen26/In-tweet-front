from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

login = "http://localhost:3000/login"
error = "Le nom d'utilisateur ou le mot de passe n'est pas bon"

driver.get(login)

username = driver.find_element(By.NAME, "username")
password = driver.find_element(By.NAME, "password")

password.clear()
password.send_keys("test1234")

username.clear()
username.send_keys("baduser")

connectButton = driver.find_element(By.ID, "connect-button")

connectButton.click()

WebDriverWait(driver, 10).until(presence_of_element_located((By.XPATH, "//*[@id='root']/div/div[2]/div")))

errorElement = driver.find_element(By.XPATH, "//*[@id='root']/div/div[2]/div")

assert errorElement.text == error

driver.close()